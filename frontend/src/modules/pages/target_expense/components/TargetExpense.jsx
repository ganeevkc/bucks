import React from "react";
import { Header } from "../../../../shared/components/heading/Header";
import "./targetexpense.css";

export const TargetExpense = () => {
	return (
		<div>
			<Header />
			<div className="bod">
				<div className="cust_details">
					<h2>Custom Details</h2>
					<div className="row target_name">
						<h3 className="col-4">Add Target Name</h3>
						<input
							type="text"
							className="col-7"
							placeholder="Target Name"
						/>
					</div>
					<div className="row target_amt">
						<h3 className=" col-4">Add Target Amount</h3>
						<input
							type="number"
							className="col-7"
							placeholder="Target Amount"
						/>
					</div>
					<div className="row target_desc">
						<h3 className=" col-4">Add Target Description</h3>
						<input
							type="text"
							className="col-7"
							placeholder="Target Description"
						/>
					</div>
					<div className="row target_date">
						<h3 className=" col-4">Add Target Date</h3>
						<input
							type="date"
							className="col-7"
							placeholder="Target Date"
						/>
					</div>
				</div>
				<div className="but">
					<button className="comp_button" type="button">
						Compute
					</button>
				</div>
				<div className="avg_savings_target">
					<p>Savings Target (Per Month) :</p>
				</div>
				<div className="month_saving">
					<p>Your Average Monthly Saving:</p>
				</div>
				<div className="message">
					<p>Message:</p>
				</div>
			</div>
		</div>
	);
};
