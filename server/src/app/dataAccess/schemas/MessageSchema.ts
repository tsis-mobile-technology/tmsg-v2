/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import IMessageModel = require("./../../model/interfaces/IMessageModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class MessageSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            room : {
                type: String,
                required: true
            },
            created: {
                type: Date
            },
            from: {
                type: String,
                required: true
            },
            to: {
                type: String,
                required: true
            },
            message: {
                type: String,
                required: true
            }
        });

        return schema;
    }
}
var messageSchema = mongooseConnection.model<IMessageModel>("Messages", MessageSchema.schema);
export = messageSchema;""