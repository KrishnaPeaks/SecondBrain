import express, { Request, Response } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://krishna:krishna2006@cluster0.0wdrbfx.mongodb.net/");

app.post("/api/v1/signup", async (req: Request, res: Response) => {
    const { username, password } = req.body;

    await UserModel.create({
        username,
        password
    });

    res.json({
        message: "user signed up"
    });
});

app.post("/api/v1/signin", (req: Request, res: Response) => {
    res.json({ message: "signin endpoint" });
});

app.get("/api/v1/content", (req: Request, res: Response) => {
    res.json({ message: "content endpoint" });
});

app.delete("/api/v1/content", (req: Request, res: Response) => {
    res.json({ message: "delete endpoint" });
});

app.post("/api/v1/brain/share", (req: Request, res: Response) => {
    res.json({ message: "share endpoint" });
});

app.get("/api/v1/brain/:sharelink", (req: Request, res: Response) => {
    res.json({
        sharelink: req.params.sharelink
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});