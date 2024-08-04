import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import session from "express-session";
import { userRoutes } from "./modules/routes/user-routes.js";
import { createConnection } from "./shared/db/connection.js";
// import { check_User } from "./modules/controllers/user-controller.js";
import cookieParser from "cookie-parser";
import { categoryRoutes } from "./modules/routes/category-routes.js";
import { transactionRoutes } from "./modules/routes/transaction-routes.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
// app.use(cookieParser());
// app.use(
// 	session({
// 		secret: process.env.SECRETKEY,
// 	})
// );
app.use("/", userRoutes);
app.use("/", categoryRoutes);
app.use("/", transactionRoutes);
const promise = createConnection();
promise
	.then(() => {
		console.log("Connection established.");
		const server = app.listen(process.env.PORT || 1111, (err) => {
			if (err) {
				console.log("Error found.");
			} else {
				console.log("Server up and running.", server.address().port);
			}
		});
	})
	.catch((err) => {
		console.log("Server down...", err);
		throw err;
	});
// app.get("/", (req, res) => {
// 	if (req.session.user) {
// 		const userID = req.session.user._id; // Access user ID from session
// 		// ... rest of your logic
// 	} else {
// 		res.status(401).json({ error: "Unauthorized" });
// 	}
// });
// app.post("/login", (req, res) => {
// 	if (check_User) {
// 		req.session.userId = doc;
// 		console.log(doc);
// 		res.json({ success: true, doc: userId });
// 		//res.send missing
// 	} else {
// 		res.json({ success: false });
// 	}
// });
