import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";

const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

router.post("/Rec", async (req, res) => {
  try {
    const prompt = `I Have ${req.body.food1} and ${req.body.food2} what can I make with it?`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return res.json(text);
  } catch (error) {
    console.log("ERROR__Gemini Not Working!!", error);
    return res.status(500).json({ message: "Gemini Not Working!!" });
  }
});

export default router;
