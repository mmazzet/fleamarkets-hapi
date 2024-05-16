import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";

export const accountsController = {
  index: {
    auth: false,
    handler: async function (request: Request, h: ResponseToolkit) {
      return h.view("main", { title: "Welcome to Flea Market" });
    },
  },
  showSignup: {
    auth: false,
    handler: async function (request: Request, h: ResponseToolkit) {
      return h.view("signup", { title: "Sign up for Flea Market" });
    },
  },
  signup: {
    auth: false,
    handler: async function (request: Request, h: ResponseToolkit) {
      const user = request.payload;

      await db.userStore.add(user);
      return h.redirect("/");
    },
  },
  showLogin: {
    auth: false,
    handler: async function (request: Request, h: ResponseToolkit) {
      return h.view("login", { title: "Login to Flea Market" });
    },
  },
  login: {
    auth: false,
    handler: async function (request: Request, h: ResponseToolkit) {
      const { email, password } = request.payload as any;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return h.view("login", { title: "Login to Flea Market", errorMessage: "Invalid email format" });
      }
      const user = await db.userStore.findBy(email);
      if (!user || user.password !== password) {
        return h.view("login", { title: "Login to Flea Market", errorMessage: "Invalid email or password" });
      }


      request.cookieAuth.set({ id: user._id });
      return h.redirect("/addmarket");
    },
  },
  logout: {
    handler: async function (request: Request, h: ResponseToolkit) {
      request.cookieAuth.clear();
      return h.redirect("/");
    },
  },

  async validate(request: Request, session: any) {
    const user = await db.userStore.findOne(session.id);
    if (!user) {
      return { isValid: false };
    }
    return { isValid: true, credentials: user };
  },
};
