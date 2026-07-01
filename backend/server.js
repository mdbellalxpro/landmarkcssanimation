
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import connectDB from "./config/DB.js";
import blogRoutes from "./routes/blogroutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/blogs", blogRoutes);
app.use(morgan("dev"));

app.get("/", (req, res) => {

    res.send("Professional Blog API Running 🚀");

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server Running On Port ${PORT}`);

});
