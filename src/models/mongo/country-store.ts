import { Country } from "../../types/fleamarket-types.js";
import { CountryMongoose } from "./country.js";

export const countryStore = {
  async find(): Promise<Country[]> {
    const countries = await CountryMongoose.find().lean();
    return countries;
  },

  async findOne(id: string): Promise<Country | null> {
    const country = await CountryMongoose.findOne({ _id: id }).lean();
    return country;
  },

  async findBy(countryname: string, _id: string): Promise<Country | null> {
    const country = await CountryMongoose.findOne({
      countryname,
      _id,
    }).lean();
    return country;
  },
};


