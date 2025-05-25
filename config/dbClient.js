import { MongoClient } from "mongodb";

class dbClient {
  constructor() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=Cluster0`;
    this.client = new MongoClient(queryString);
    this.connectDB();
  }

  async connectDB() {
    try {
      await this.client.connect();
      //get Data Base
      this.db = this.client.db("test");
      console.log("Connected to server");
    } catch (error) {
      console.log("error");
    }
  }
}

export default new dbClient();
