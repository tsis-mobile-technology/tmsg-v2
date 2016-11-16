import RoomModel = require("./../model/RoomModel");
import IRoomModel = require("./../model/interfaces/IRoomModel");
import RoomSchema = require("./../dataAccess/schemas/RoomSchema");
import RepositoryBase = require("./BaseRepository");

class RoomRepository  extends RepositoryBase<IRoomModel> {
    constructor () {
        super(Roomchema);
    }
}

Object.seal(RoomRepository);
export = RoomRepository;