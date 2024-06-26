import { User } from "../../types/fleamarket-types.js";
import { UserMongoose } from "./user.js";

export const userStore = {
  async find(): Promise<User[]> {
    const users = await UserMongoose.find().lean();
    return users;
  },

  async findOne(id: string): Promise<User | null> {
    if (id) {
      const user = await UserMongoose.findOne({ _id: id }).lean();
      return user;
    }
    return null;
  },

  async add(user: any): Promise<User | null> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      throw new Error("Invalid email format");
    }
    if (user.password.length < 6) { 
      throw new Error("Password must be at least 6 characters long");
    }
    const newUser = new UserMongoose(user);
    const userObj = await newUser.save();
    console.log("Newly created user:", userObj);
    return userObj;
  },

  async findBy(email: string): Promise<User | null> {
    const user = await UserMongoose.findOne({ email: email }).lean();
    return user;
  },

  async deleteOne(id: string) {
    try {
      await UserMongoose.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async delete() {
    await UserMongoose.deleteMany({});
  },
};

