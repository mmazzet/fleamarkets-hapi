import { Schema, model } from "mongoose";
import { User } from "../../types/fleamarket-types";

const userSchema = new Schema<User>({
  firstName: String,
  lastName: String,
  email: { type: String, required: true },
  password: { type: String, required: true, minlength: 6 },
});

export const UserMongoose = model("User", userSchema);

