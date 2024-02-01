import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const dbUri = process.env.MONGO_CONNECTION_URL || "mongodb://localhost:27017/planner";
export const jwtSecret = process.env.JWT_SECRET;
