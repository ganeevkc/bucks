import mongoose, { SchemaTypes } from "mongoose";
const categorySchema = mongoose.Schema({
	ExpenseName: {
		type: SchemaTypes.String,
		required: true,
	},
	color: {
		type: SchemaTypes.String,
		// required: true,
	},
	// user_id: {
	// 	type: SchemaTypes.ObjectId,
	// 	// required: true,
	// }, //
	// custom_categories: {
	// 	type: SchemaTypes.ObjectId,
	// },
});
export const categoryModel = mongoose.model("categories", categorySchema);
