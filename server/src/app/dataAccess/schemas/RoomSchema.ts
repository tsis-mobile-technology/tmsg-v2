/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import IRoomModel = require("./../../model/interfaces/IRoomModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class RoomSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            created: {
                type: Date,
                required: true
            }
        });

        return schema;
    }
}
var roomSchema = mongooseConnection.model<IRoomModel>("Rooms", RoomSchema.schema);
export = roomSchema;""