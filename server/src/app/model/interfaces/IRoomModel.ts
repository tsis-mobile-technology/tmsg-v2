import mongoose = require("mongoose");

interface IRoomModel extends mongoose.Document {
	name: string;
	created: Date;
}

export = IRoomModel;