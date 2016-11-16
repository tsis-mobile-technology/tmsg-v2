/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import ICounselorModel = require("./../../model/interfaces/ICounselorModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class CounselorSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            idx : {
                type: Number,
                required: true
            },
            loginid: {
                type: String,
                required: true
            },
            status: {
                type: Number,
                required: true
            },
            name: {
                type: String
            },
            password: {
                type: String,
            },
            issaveid: {
                type: Boolean
            },
            isautologin: {
                type: Boolean
            },
            checkin: {
                type: Date,
                required: true,
                default: Date.now
            }
        });

        return schema;
    }
}
var counselorSchema = mongooseConnection.model<ICounselorModel>("Counselors", CounselorSchema.schema);
export = counselorSchema;""