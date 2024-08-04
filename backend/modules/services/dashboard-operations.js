import { transactionModel } from "../models/transaction-schema.js";
import { userModel } from "../models/user-schema.js";
export const calcIncome = () => {
	try {
		const userId = getCurrentUserId();
			// Aggregation pipeline to calculate average monthly income
			const pipeline = [
				{
					$match: {
						user_id: userId,
						type: "income",
					},
				},
				{
					$group: {
						_id: {
							year: { $year: "$date_time" },
							month: { $month: "$date_time" },
						},
						totalIncome: { $sum: "$amount" },
					},
				},
				{
					$group: {
						_id: "$_id.month",
						averageIncome: { $avg: "$totalIncome" },
					},
				},
				{
					$sort: { _id: 1 }, // Sort by month for better readability
				},
			];

			const results = await transactionModel.aggregate(pipeline);

			// Calculate overall average (optional)
			const overallAverage =
				results.reduce((acc, curr) => acc + curr.averageIncome, 0) /
				results.length;

			return { monthlyIncome: results, overallAverage };
		}
	 catch (err) {
		alert("Error loading Income!");
		throw err;
	}
};
