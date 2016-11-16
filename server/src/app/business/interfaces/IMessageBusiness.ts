import BaseBusiness = require("./../BaseBusiness");
import IMessageModel = require("./../../model/interfaces/IMessageModel");

interface IMessageBusiness extends BaseBusiness<IMessageModel> {

}
export = IMessageBusiness;