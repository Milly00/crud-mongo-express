import ProductsModel from "../models/products.js";
class ProductsController {
  constructor() {}

  async create(req, res) {
    try {
      const data = await ProductsModel.create(req.body);

      res
        .status(201)
        .json({ status: "ok", message: "Producto creado correctamente" });
    } catch (error) {
      res.status(500).send(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = await ProductsModel.update(id, req.body);
      res.status(200).json({
        status: "ok",
        data,
        message: "Producto actualizado correctamente",
      });
    } catch (error) {
      res.status(500).send(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await ProductsModel.delete(id);
      res
        .status(201)
        .json({ status: "ok", message: "Producto eliminado correctamente" });
    } catch (error) {
      res.status(500).send(e);
    }
  }
  async getAll(req, res) {
    try {
      const data = await ProductsModel.getAll();

      res.status(201).json({ status: "ok", data });
    } catch (error) {
      res.status(500).send(e);
    }
  }
  async getById(req, res) {
    try {
      const { id } = req.params;
      const data = await ProductsModel.getById(id);

      res.status(201).json({ status: "ok" });
    } catch (error) {
      res.status(500).send(e);
    }
  }
}

export default new ProductsController();
