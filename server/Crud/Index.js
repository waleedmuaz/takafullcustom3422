import Shopify from "@shopify/shopify-api";
import { parseGid } from "@shopify/admin-graphql-api-utilities";

const {
  OrderWebhookCallBack,
  findAndCreate,
  getProductTakafulData,
  getPlanTakafulData,
  storeProduct,
  getProductByIdTakafulMysql,
  GetPolicyMySQL,
  getOrderDataMySQL,
  updateOrderwithPolicy,
  getpolicybyIdMySql,
  getProductTakafulDataForRemoveTag,
} = require("../mysqlidb");

async function post(ctx) {
  const data = ctx.request.body;
  const IfOrderExsit = await findAndCreate(data.id);
  if (IfOrderExsit == 1) {
    console.log("already exist");
    return 0;
  }
  OrderWebhookCallBack(data);
  let fetData = await fetch(
    "https://retail.jubileegeneral.com.pk/JubileeWebApp/sales/submitPurchaseProtectionPolicy",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + btoa(`HEFMZYAGQJ29JC35YQ6FY41OFZON03MT:7MBZTO0D44`),
      },
      body: JSON.stringify({
        orderid: data.id,
        order_total: "1111",
        customer_detail: {
          customer_email: data.customer.email,
          customer_mobile: data.shipping_address.phone,
          customer_dob: "0000-00-00",
          customer_cnic: "3520213978175",
          customer_firstname: data.customer.first_name,
          customer_lastname: data.customer.last_name,
          customer_address:
            data.billing_address.address1 +
            " " +
            data.billing_address.city +
            " " +
            data.billing_address.province +
            " " +
            data.billing_address.country +
            " " +
            data.billing_address.zip,
          customer_city: data.billing_address.city,
        },
        items: [
          {
            item_premium: "200",
            duration: 3,
            durationType: "month",
            item_name: "T500 Smart Watch For Android & IOS",
            item_qty: 1,
            item_price: "2199",
            IMEI: "",
            seriral_number: "98079",
            retailer_sku: "TM-sku",
            sum_insured: "2199",
            isTakaful: 1,
            filer_tax_status: "Filer",
            filer_tax_total: 1,
          },
        ],
      }),
    }
  );
  let policy = await fetData.json();
  updateOrderwithPolicy(data, policy);
  return 1;
}
async function addTakafullTag(ctx, token) {
  let data = ctx.request.body;
  for (let i = 0; i < data.selection.length; i++) {
    let respondse = await fetch(
      "https://winstor-pk.myshopify.com/admin/api/2022-04/products/" +
        parseGid(data.selection[i].id) +
        ".json",
      {
        method: "GET",
        headers: {
          "X-Shopify-Access-Token": token,
          "Content-Type": "application/json",
        },
      }
    );
    let returnData = await respondse.json();
    let tagsData = returnData.product.tags.split(",");
    let obj = {
      id: parseGid(data.selection[i].id),
      tags: returnData.product.tags + ",takafull",
    };
    await fetch(
      "https://winstor-pk.myshopify.com/admin/api/2022-04/products/" +
        parseGid(data.selection[i].id) +
        ".json",
      {
        method: "PUT",
        headers: {
          "X-Shopify-Access-Token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product: obj }),
      }
    );
  }

  return 1;
}

async function removeTakafullTaf(token) {
  let ids = await getProductTakafulDataForRemoveTag();
  console.log(ids);
  if (ids.length != 0) {
    for (let i = 0; i < ids.length; i++) {
      console.log("Incremnet " + i);
      console.log("product Id " + ids[i].product_id);
      let respondse = await fetch(
        "https://winstor-pk.myshopify.com/admin/api/2022-04/products/" +
          ids[i].product_id +
          ".json",
        {
          method: "GET",
          headers: {
            "X-Shopify-Access-Token": token,
            "Content-Type": "application/json",
          },
        }
      );
      let returnData = await respondse.json();
      let tagsData = returnData.product.tags.split(",");
      console.log("before Filter", tagsData);
      if (tagsData.includes(" takafull")) {
        tagsData = tagsData.filter(function (item) {
          return item !== " takafull";
        });
        console.log("After Filter", tagsData);

        let obj = {
          id: parseGid(ids[i].product_id),
          tags: tagsData.toString(),
        };
        console.log("obj", obj);

        await fetch(
          "https://winstor-pk.myshopify.com/admin/api/2022-04/products/" +
            ids[i].product_id +
            ".json",
          {
            method: "PUT",
            headers: {
              "X-Shopify-Access-Token": token,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ product: obj }),
          }
        );
      }
    }
  }

  return 1;
}
async function storeProductForTakaful(ctx, token) {
  await removeTakafullTaf(token);
  await addTakafullTag(ctx, token);
  return await storeProduct(ctx);
}
async function getProductData() {
  return await getProductTakafulData();
}
async function getPlanData() {
  return await getPlanTakafulData();
}
async function getProductByIdTakaful(ctx) {
  return await getProductByIdTakafulMysql(ctx);
}
async function getpolicy(ctx) {
  return await GetPolicyMySQL(ctx);
}

async function getOrderData(ctx) {
  return await getOrderDataMySQL(ctx);
}
async function getpolicybyId(ctx) {
  return await getpolicybyIdMySql(ctx);
}
async function getVariantByname(product_id, name, token) {
  console.log("product ID ", product_id);
  console.log("Name ", name);
  console.log("token ", token);
  let respondse = await fetch(
    "https://winstor-pk.myshopify.com/admin/api/2022-01/products/" +
      product_id +
      "/variants.json/",
    {
      method: "GET",
      headers: {
        "X-Shopify-Access-Token": token,
        "Content-Type": "application/json",
      },
    }
  );
  let returnData = await respondse.json();
  let getReturnData = returnData.variants.map(function (element) {
    if (element.title == name) {
      return element;
    }
  });
  console.log("Index getReturnData", getReturnData[0]);
  if (getReturnData[0] == "undefined") {
    return 0;
  }
  return getReturnData.filter(Boolean);
}

const postRequest = {
  post,
  getProductData,
  getPlanData,
  storeProductForTakaful,
  getProductByIdTakaful,
  getpolicy,
  getOrderData,
  getpolicybyId,
  getVariantByname,
};
export default postRequest;
