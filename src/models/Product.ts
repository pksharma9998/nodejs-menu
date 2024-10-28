import mongoose from "mongoose";
import Mongoose, { Document } from "mongoose";

export interface Product extends Document {
    name: string;
    description: string;
}

const productSchema = new mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
});

const Product = mongoose.model<Product>("product", productSchema);

export default Product;