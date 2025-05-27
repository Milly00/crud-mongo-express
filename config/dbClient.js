import { MongoClient } from "mongodb";
import mongoose from "mongoose";
class dbClient {
  constructor() {
    this.connect();
  }
  async connect() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/test?retryWrites=true&w=majority`;
    await mongoose.connect(queryString);
  }

  async closeConnection() {
    try {
      await mongoose.disconnect();
      console.log("Conection closed.");
    } catch (error) {
      console.log(error);
    }
  }
}

export default new dbClient();
