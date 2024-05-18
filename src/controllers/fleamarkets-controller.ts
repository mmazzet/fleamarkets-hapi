import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";

export const fleamarketsController = {
  index: {
    handler: async function (request: Request, h: ResponseToolkit) {
      const loggedInUser = request.auth.credentials;
      const countries = await db.countryStore.find();
      return h.view("addmarket", {
        title: "Add a Flea Market",
        user: loggedInUser,
        countries: countries,
      });
    },
  },
  addmarket: {
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const loggedInUser = request.auth.credentials;
        const fleamarketPayload = request.payload as any;
        const fleamarket = {
          marketname: fleamarketPayload.marketname,
          category: fleamarketPayload.category,
          country: fleamarketPayload.country,
          lat: fleamarketPayload.lat,
          lng: fleamarketPayload.lng,
        };
        await db.fleamarketStore.add(fleamarket);

        return h.redirect("/addmarket");
      } catch (err: any) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
  report: {
    handler: async function (request: Request, h: ResponseToolkit) {
      const loggedInUser = request.auth.credentials;
      const fleamarkets = await db.fleamarketStore.find();
      return h.view("report", {
        title: "Report",
        user: loggedInUser,
        fleamarkets: fleamarkets,
      });
    },
  },
};
