import { Router } from "express";
import Product from "../models/Product";

const router = Router();

// Add new product

router.post('/add', async (req, res) => {
    try {
        const { name, description } = req.body;
        const product = new Product({ name, description });
        await product.save();
        res.status(201).json(product)

    } catch (error) {
        res.status(500).json({ error: "Error adding product" })

    }
});

// Fetching products
router.get('/list', async (_req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Error fetching product" })
    }
});

export default router;