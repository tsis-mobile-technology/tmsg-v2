import IMessageModel = require('./interfaces/IMessageModel');

class MessageModel {

    private _messageModel: IMessageModel;

    constructor(messageModel: IMessageModel) {
        this._messageModel = messageModel;
    }
    get room (): string {
        return this._messageModel.room;
    }

    get from (): string {
        return this._messageModel.from;
    }

    get created (): Date {
        return this._messageModel.created;
    }

    get to (): string {
        return this._messageModel.to;
    }
    
    get message (): string {
        return this._messageModel.message;
    }
}
Object.seal(MessageModel);
export =  MessageModel;