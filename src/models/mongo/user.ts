import { Schema, model } from "mongoose";
import { User } from "../../types/fleamarket-types";

const userSchema = new Schema<User>({
  firstName: String,
  lastName: String,
  email: { type: String, required: true },
  password: String,
});

export const UserMongoose = model("User", userSchema);

