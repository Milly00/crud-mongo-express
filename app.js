import "dotenv/config";
import express from "express";
import routeProducts from "./routes/products.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/products", routeProducts);
try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server active on port ${PORT}`));
} catch (error) {
  console.log(error);
}
