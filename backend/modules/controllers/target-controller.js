import { differenceInMonths } from "date-fns";

export const calcSavingsTarget = async (req, res) => {
	try {
		const { target_name, target_amount, target_desc, target_date } =
			req.body;
		const currentDate = new Date();
		const diffInMonths = differenceInMonths(
			new Date(target_date),
			currentDate
		);
		const target = target_amount / diffInMonths;
		res.status(200).json({ doc: target });
	} catch (err) {
		res.status(400).json({ error: err });
	}
};
export const avgMonthlySaving = () => {
	try {
	} catch (err) {
		res.status(400).json({ error: err });
	}
};
