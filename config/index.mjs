import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const dbUri = process.env.MONGO_CONNECTION_URL || "mongodb+srv://hraju:Ponnu1%40as_@clusterhr.o9bpbap.mongodb.net/";
export const jwtSecret = process.env.JWT_SECRET || "blue";
