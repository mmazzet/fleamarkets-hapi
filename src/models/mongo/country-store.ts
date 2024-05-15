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

  async findBy(lastName: string, firstName: string): Promise<Country | null> {
    const country = await CountryMongoose.findOne({
      lastName,
      firstName,
    }).lean();
    return country;
  },
};


