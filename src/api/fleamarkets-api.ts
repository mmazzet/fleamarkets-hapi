import Boom from "@hapi/boom";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";
import { Country, Fleamarket } from "../types/fleamarket-types.js";

export const fleamarketsApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const fleamarkets = await db.fleamarketStore.find();
        return h.response(fleamarkets).code(200);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findByCountry: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const fleamarkets = (await db.fleamarketStore.findBy(request.params.id)) as Fleamarket;
      return h.response(fleamarkets).code(200);
    },
  },

  addMarket: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const countryId = request.params.id;
      console.log("Country ID:", countryId);

      //const country = (await db.countryStore.findOne(request.params.id)) as Country;

      const country = await db.countryStore.findOne(countryId);
      console.log("Country:", country);

      if (country === null) {
        return Boom.notFound("No Country with this id");
      }
      const fleamarketPayload = request.payload as Fleamarket;
      console.log("Fleamarket Payload:", fleamarketPayload);

      const fleamarket = {
        marketname: fleamarketPayload.marketname,
        category: fleamarketPayload.category,
        donor: request.auth.credentials._id,
        country: fleamarketPayload.country,
        lat: fleamarketPayload.lat,
        lng: fleamarketPayload.lng,
      };

      console.log("New Fleamarket:", fleamarket);

      const newFleamarket = (await db.fleamarketStore.add(fleamarket)) as Fleamarket;

      console.log("Newly added Fleamarket:", newFleamarket);
      return h.response(newFleamarket).code(200);
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      console.log("delete...");
      await db.fleamarketStore.delete();
      return h.response().code(204);
    },
  },
};
