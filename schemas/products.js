import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 250,
    },
    category: {
      type: String,
      required: true,
      enum: {
        values: [
          "maquillaje",
          "cuidadoPersonal",
          "accesorios",
          "skincare",
          "fragancias",
        ],
        message: "{VALUE} is not supported",
      },
    },
    code: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 6,
    },
  },
  { timestamps: true }
);

export default mongoose.model("products", productSchema);
