import { Schema, model } from "mongoose";
import { Fleamarket } from "../../types/fleamarket-types";

const fleamarketSchema = new Schema<Fleamarket>({
  marketname: String,
  category: String,
  donor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: "Country",
  },
  lat: String,
  lng: String,
});

export const FleamarketMongoose = model("Fleamarket", fleamarketSchema);

