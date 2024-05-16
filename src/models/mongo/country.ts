import { Schema, model } from "mongoose";
import { Country } from "../../types/fleamarket-types";

const countrySchema = new Schema<Country>({
  countryname: String,
});

export const CountryMongoose = model("Country", countrySchema);

