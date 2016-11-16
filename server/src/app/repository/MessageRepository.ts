import MessageModel = require("./../model/MessageModel");
import IMessageModel = require("./../model/interfaces/IMessageModel");
import MessageSchema = require("./../dataAccess/schemas/MessageSchema");
import RepositoryBase = require("./BaseRepository");

class MessageRepository  extends RepositoryBase<IMessageModel> {
    constructor () {
        super(Messagechema);
    }
}

Object.seal(MessageRepository);
export = MessageRepository;