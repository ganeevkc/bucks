import express from "express";
import {
	addTransaction,
	getAllTransaction,
} from "../controllers/transaction-controller.js";
import { get_Category_Ids } from "../controllers/transaction-controller.js";
export const transactionRoutes = express.Router();
transactionRoutes.post("/add-transaction", addTransaction);
transactionRoutes.get("/get-transaction", getAllTransaction);
transactionRoutes.get("/get-category-ids", get_Category_Ids);
