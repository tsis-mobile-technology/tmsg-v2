import IRoomModel = require('./interfaces/IRoomModel');

class RoomModel {

    private _roomModel: IRoomModel;

    constructor(roomModel: IRoomModel) {
        this._roomModel = roomModel;
    }
    get name (): string {
        return this._roomModel.name;
    }

    get created (): Date {
        return this._roomModel.created;
    }
}
Object.seal(RoomModel);
export =  RoomModel;