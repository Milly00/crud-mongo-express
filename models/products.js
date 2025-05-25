import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class ProductsModel {
  async create(product) {
    const colProducts = dbClient.db.collection("products");
    return await colProducts.insertOne(product);
  }

  async getAll() {
    const colProducts = dbClient.db.collection("products");
    return await colProducts.find({}).toArray();
  }

  async getById(id) {
    const colProducts = dbClient.db.collection("products");
    return await colProducts.findOne({ _id: new ObjectId(id) });
  }

  async update(id, product) {
    const colProducts = dbClient.db.collection("products");
    return await colProducts.updateOne(
      { _id: new ObjectId(id) },
      { $set: product }
    );
  }

  async delete(id) {
    const colProducts = dbClient.db.collection("products");
    return await colProducts.deleteOne({ _id: new ObjectId(id) });
  }
}

export default new ProductsModel();
