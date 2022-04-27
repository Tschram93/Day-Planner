const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DayPlannerSchema = new Schema({
	complete: {
		default: false,
		type: Boolean,
	},
	text: {
		required: true,
		type: String,
	},
	timestamp: {
		default: Date.now(),
		type: String,
	},
});

const dayPlanner = mongoose.model('dayPlanner', DayPlannerSchema);

module.exports = dayPlanner;