import { Schema, model } from "mongoose";
import { Fleamarket } from "../../types/fleamarket-types";

const fleamarketSchema = new Schema<Fleamarket>({
  marketname: String,
  category: String,
  country: String,
  lat: String,
  lng: String,
});

export const FleamarketMongoose = model("Fleamarket", fleamarketSchema);

