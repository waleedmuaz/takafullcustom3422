import "@babel/polyfill";
import dotenv from "dotenv";
import "isomorphic-fetch";
import createShopifyAuth, { verifyRequest } from "@shopify/koa-shopify-auth";
import Shopify, { ApiVersion, DataType } from "@shopify/shopify-api";
import Koa from "koa";
import next from "next";
import Router from "koa-router";
import koaBody from "koa-body";
import GetCRUD from "../server/Crud/Index";
import { route } from "next/dist/server/router";

dotenv.config();
const port = parseInt(process.env.PORT, 10) || 8081;
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
});
var accessTokenExport;
var shopExport;

const handle = app.getRequestHandler();

Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SCOPES.split(","),
  HOST_NAME: process.env.HOST.replace(/https:\/\/|\/$/g, ""),
  API_VERSION: ApiVersion.October20,
  IS_EMBEDDED_APP: true,
  // This should be replaced with your preferred storage strategy
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

// Storing the currently active shops in memory will force them to re-login when your server restarts. You should
// persist this object in your app.
const ACTIVE_SHOPIFY_SHOPS = {};

Shopify.Webhooks.Registry.addHandler("APP_UNINSTALLED", {
  path: "/webhooks",
  webhookHandler: async (topic, shop, body) =>
    delete ACTIVE_SHOPIFY_SHOPS[shop],
});
app.prepare().then(async () => {
  const server = new Koa();
  const router = new Router();
  server.use(koaBody({ multipart: true }));

  server.keys = [Shopify.Context.API_SECRET_KEY];
  server.use(
    createShopifyAuth({
      async afterAuth(ctx) {
        // Access token and shop available in ctx.state.shopify
        const { shop, accessToken, scope } = ctx.state.shopify;
        const host = ctx.query.host;
        ACTIVE_SHOPIFY_SHOPS[shop] = scope;

        exportTokens(shop, accessToken);
        console.log(accessToken);

        const responses = await Shopify.Webhooks.Registry.register({
          shop,
          accessToken,
          path: "/webhooks",
          topic: "APP_UNINSTALLED",
        });

        if (!responses["APP_UNINSTALLED"].success) {
          console.log(
            `Failed to register APP_UNINSTALLED webhook: ${responses.result}`
          );
        }

        // Redirect to app with shop parameter upon auth
        ctx.redirect(`/?shop=${shop}&host=${host}`);
      },
    })
  );

  const handleRequest = async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  };
  //

  //
  router.post("/webhooks", async (ctx) => {
    try {
      await Shopify.Webhooks.Registry.process(ctx.req, ctx.res);
      console.log(`Webhook processed, returned status code 200`);
    } catch (error) {
      console.log(`Failed to process webhook: ${error}`);
    }
  });

  //
  router.post("/api/webhook", async (ctx, next) => {
    if (ctx.req.method === "POST") {
      const ifSuccess = await GetCRUD.post(ctx);
      if (ifSuccess == 0) {
        ctx.response.status = 200;
        ctx.res.statusCode = 200;
        ctx.body = {
          success: false,
          Message: "already exist",
        };
      } else {
        ctx.response.status = 201;
        ctx.body = {
          success: true,
          Message: "success",
        };
      }
    } else {
      ctx.response.status = 401;
      ctx.body = {
        success: false,
        Message: "Unable to save the data.",
      };
    }
  });
  router.get("/api/get/product/takaful", async (ctx, next) => {
    if (ctx.req.method === "GET") {
      const productData = await GetCRUD.getProductData();
      ctx.response.status = 201;
      ctx.body = {
        success: true,
        Message: "success",
        data: productData,
      };
    }
  });
  router.get("/api/get/plan/takaful", async (ctx, next) => {
    if (ctx.req.method === "GET") {
      const planData = await GetCRUD.getPlanData();
      ctx.response.status = 201;
      ctx.body = {
        success: true,
        Message: "success",
        data: planData,
      };
    }
  });
  router.get("/api/get/orders/list", async (ctx, next) => {
    if (ctx.req.method === "GET") {
      const orderData = await GetCRUD.getOrderData();
      ctx.response.status = 201;
      ctx.body = {
        success: true,
        Message: "success",
        data: orderData,
      };
    }
  });

  router.post("/api/store/product/takaful", async (ctx, next) => {
    if (ctx.req.method === "POST") {
      const planData = await GetCRUD.storeProductForTakaful(
        ctx,
        accessTokenExport
      );
      ctx.response.status = 201;
      ctx.body = {
        success: true,
        Message: "success",
        data: planData,
      };
    }
  });
  // router.post(
  //   'submit/variant',
  //   async (ctx, next) => {
  //     console.log(accessTokenExport);

  //         ctx.response.status = 201;
  //         ctx.body = {
  //             success: true,
  //             "Message":"submit variant Successfully",
  //         };

  //   }
  // );

  // router.post("/apps/api/get/cart", async (ctx, next) => {
  //   if (ctx.req.method === "POST") {
  //     let returnData = "";
  //     console.log(accessTokenExport);
  //     let policy = await GetCRUD.getpolicybyId(ctx);
  //     console.log(policy);
  //     if (policy != 0) {
  //       for (let i = 0; i < policy.length; i++) {
  //         let obj = {
  //           option1: policy[i].name,
  //           price: policy[i].amount,
  //         };
  //         console.log("OBJ", obj);
  //         let requestData = ctx.request.body;

  //         let JSONDataResponse = await GetCRUD.getVariantByname(
  //           requestData.product_id,
  //           policy[i].name,
  //           accessTokenExport
  //         );
  //         console.log("JSONDataResponser", JSONDataResponse);
  //         if (JSONDataResponse == 0) {
  //           let respondse = await fetch(
  //             "https://winstor-pk.myshopify.com/admin/api/2022-01/products/" +
  //               requestData.product_id +
  //               "/variants.json",
  //             {
  //               method: "POST",
  //               headers: {
  //                 "X-Shopify-Access-Token": accessTokenExport,
  //                 "Content-Type": "application/json",
  //               },
  //               body: JSON.stringify({ variant: obj }),
  //             }
  //           );
  //           returnData = await respondse.json();
  //           //Varinat inventory
  //           let inventory = {
  //             location_id: 65599897855,
  //             inventory_item_id: returnData.variant.inventory_item_id,
  //             available_adjustment: 1,
  //           };
  //           let dataInventory = await fetch(
  //             "https://winstor-pk.myshopify.com/admin/api/2022-01/inventory_levels/adjust.json",
  //             {
  //               method: "POST",
  //               headers: {
  //                 "X-Shopify-Access-Token": accessTokenExport,
  //                 "Content-Type": "application/json",
  //               },
  //               body: JSON.stringify(inventory),
  //             }
  //           );
  //           await dataInventory.json();
  //           returnData = returnData.variant.id;
  //         } else {
  //           returnData = JSONDataResponse[0].id;
  //         }
  //       }
  //       console.log("returnData", returnData);
  //       ctx.response.status = 201;
  //       ctx.body = {
  //         success: true,
  //         Message: "success cart update",
  //         data: returnData,
  //       };
  //     }
  //   } else {
  //     ctx.response.status = 201;
  //     ctx.body = {
  //       success: false,
  //       Message: "Bundle id not found",
  //     };
  //   }
  // });

  router.post("/apps/api/get/product/takaful/id", async (ctx, next) => {
    console.log(accessTokenExport);
    if (ctx.req.method === "POST") {
      const planData = await GetCRUD.getProductByIdTakaful(ctx);
      if (planData) {
        let policy = await GetCRUD.getpolicy(ctx);
        for (let i = 0; i < policy.length; i++) {
          let obj = {
            option1: policy[i].name,
            price: policy[i].amount,
          };
          console.log("OBJ", obj);
          let requestData = ctx.request.body;

          let respondse = await fetch(
            "https://winstor-pk.myshopify.com/admin/api/2022-01/products/" +
              requestData.product_id +
              "/variants.json",
            {
              method: "POST",
              headers: {
                "X-Shopify-Access-Token": accessTokenExport,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ variant: obj }),
            }
          );
          console.log(respondse);
        }

        ctx.response.status = 201;
        ctx.body = {
          success: true,
          Message: "success",
          data: policy,
        };
      } else {
        ctx.response.status = 200;
        ctx.body = {
          success: false,
          Message: "record not found",
        };
      }
    }
  });
  function exportTokens(shop, accessToken) {
    accessTokenExport = accessToken;
    shopExport = shop;
  }
  //
  router.post(
    "/graphql",
    verifyRequest({ returnHeader: true }),
    async (ctx, next) => {
      await Shopify.Utils.graphqlProxy(ctx.req, ctx.res);
    }
  );

  router.get("(/_next/static/.*)", handleRequest); // Static content is clear
  router.get("/_next/webpack-hmr", handleRequest); // Webpack content is clear
  router.get("(.*)", async (ctx) => {
    const shop = ctx.query.shop;

    // This shop hasn't been seen yet, go through OAuth to create a session
    if (ACTIVE_SHOPIFY_SHOPS[shop] === undefined) {
      ctx.redirect(`/auth?shop=${shop}`);
    } else {
      await handleRequest(ctx);
    }
  });

  server.use(router.allowedMethods());
  server.use(router.routes());
  //server.listen(port, () => {
  // console.log(`> Ready on http://localhost:${port}`);
  //});
  server.listen(port, "0.0.0.0", function () {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
// curl -d '{"product":{"id":7592863531263,"tags":["tk","takafull"]}}' \
// -X PUT "https://winstor-pk.myshopify.com/admin/api/2022-04/products/7592863531263.json" \
// -H "X-Shopify-Access-Token: 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" \
// -H "Content-Type: application/json"

// curl -X GET "https://winstor-pk.myshopify.com/admin/api/2022-04/products/7592863531263.json" \
// -H "X-Shopify-Access-Token: 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"
