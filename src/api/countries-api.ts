import Boom from "@hapi/boom";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";

export const countriesApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const countries = await db.countryStore.find();
      return h.response(countries).code(200);
    },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const country = await db.countryStore.findOne(request.params.id);
        if (country === null) {
          return Boom.notFound("No Country with this id");
        }
        return h.response(country).code(200);
      } catch (err) {
        return Boom.notFound("No Country with this id");
      }
    },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const country = await db.countryStore.add(request.payload);
      if (country !== null) {
        return h.response(country).code(201);
      }
      return Boom.badImplementation("error creating country");
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      await db.countryStore.delete();
      return h.response().code(204);
    },
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      await db.countryStore.deleteOne(request.params.id);
      return h.response().code(204);
    },
  },
};
