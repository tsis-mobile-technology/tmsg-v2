import CounselorModel = require("./../model/CounselorModel");
import ICounselorModel = require("./../model/interfaces/ICounselorModel");
import CounselorSchema = require("./../dataAccess/schemas/CounselorSchema");
import RepositoryBase = require("./BaseRepository");

class CounselorRepository  extends RepositoryBase<ICounselorModel> {
    constructor () {
        super(CounselorSchema);
    }
}

Object.seal(CounselorRepository);
export = CounselorRepository;