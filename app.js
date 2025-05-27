import "dotenv/config";
import express from "express";
import routeProducts from "./routes/products.js";
import bodyParser from "body-parser";
import dbClient from "./config/dbClient.js";
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/products", routeProducts);
try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server active on port ${PORT}`));
} catch (error) {
  console.log(error);
}

process.on("SIGINT", async () => {
  dbClient.closeConnection();
  process.exit(0);
});
