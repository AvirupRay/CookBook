import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./src/db/db.js";
import recipe from "./src/routes/recipe.route.js";

dotenv.config({
  path: "./config.env",
});

const app = express();

app.use(cors({}));
app.use(express.json());

app.use("/api/", recipe);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is up and running on port: " + process.env.PORT);
    });
    app.on("error", (error) => {
      console.error("Server ERROR!!", error);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection ERROR!!");
    process.exit(1);
  });
