import mongoose = require("mongoose");

interface IMessageModel extends mongoose.Document {
	room: string;
    created: Date;
    from: string;
    to: string;
    message: string;
}

export = IMessageModel;