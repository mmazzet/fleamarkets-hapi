import { countriesApi } from "./api/countries-api.js";
import { fleamarketsApi } from "./api/fleamarkets-api.js";
import { userApi } from "./api/users-api.js";

export const apiRoutes = [
  { method: "GET" as const, path: "/api/users", config: userApi.find },
  { method: "POST" as const, path: "/api/users", config: userApi.create },
  { method: "DELETE" as const, path: "/api/users", config: userApi.deleteAll },
  { method: "GET" as const, path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST" as const, path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET" as const, path: "/api/countries", config: countriesApi.find },
  { method: "GET" as const, path: "/api/countries/{id}", config: countriesApi.findOne },
  { method: "POST" as const, path: "/api/countries", config: countriesApi.create },
  { method: "DELETE" as const, path: "/api/countries/{id}", config: countriesApi.deleteOne },
  { method: "DELETE" as const, path: "/api/countries", config: countriesApi.deleteAll },

  { method: "GET" as const, path: "/api/fleamarkets", config: fleamarketsApi.findAll },
  { method: "GET" as const, path: "/api/countries/{id}/fleamarkets", config: fleamarketsApi.findByCountry },
  { method: "POST" as const, path: "/api/countries/{id}/fleamarkets", config: fleamarketsApi.addMarket },
  { method: "DELETE" as const, path: "/api/fleamarkets", config: fleamarketsApi.deleteAll },
];
