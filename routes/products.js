import express from "express";
import productsController from "../controllers/products.js";
const routeProducts = express.Router();

routeProducts.post("/", productsController.create);
routeProducts.get("/", productsController.getAll);
routeProducts.get("/:id", productsController.getById);
routeProducts.put("/:id", productsController.update);
routeProducts.delete("/:id", productsController.delete);

export default routeProducts;
