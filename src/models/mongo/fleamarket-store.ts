import { Fleamarket } from "../../types/fleamarket-types.js";
import { FleamarketMongoose } from "./fleamarket.js";

export const fleamarketStore = {
  async find(): Promise<Fleamarket[]> {
    const fleamarkets = await FleamarketMongoose.find().populate("donor").populate("country").lean();
    return fleamarkets;
  },

  async findBy(id: string): Promise<Fleamarket | null> {
    const fleamarket = await FleamarketMongoose.findOne({ country: id });
    if (!fleamarket) {
      return null;
    }
    return fleamarket;
  },

  async add(fleamarket: Fleamarket): Promise<Fleamarket | null> {
    let newFleamarket = new FleamarketMongoose({ ...fleamarket });
    await newFleamarket.save();
    return newFleamarket;
  },

  async delete() {
    await FleamarketMongoose.deleteMany({});
  },
};

