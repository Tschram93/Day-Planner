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

const DayPlanner = mongoose.model('Dayplanner', DayPlannerSchema);

module.exports = DayPlanner;