import MessageRepository = require("./../repository/MessageRepository");
import IMessageBusiness = require("./interfaces/IMessageBusiness");
import IMessageModel = require("./../model/interfaces/IMessageModel");
import MessageModel = require("./../model/MessageModel");


class MessageBusiness implements IMessageBusiness {
    private _counselorRepository: MessageRepository;

    constructor () {
        this._messageRepository = new MessageRepository();
    }

    create (item: IMessageModel, callback: (error: any, result: any) => void) {
        this._messageRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._messageRepository.retrieve(callback);
    }

    update (_id: string, item: IMessageModel, callback: (error: any, result: any) => void) {

        this._messageRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._messageRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._messageRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IMessageModel) => void) {
        this._messageRepository.findById(_id, callback);
    }

}


Object.seal(MessageBusiness);
export = MessageBusiness;