import CounselorRepository = require("./../repository/CounselorRepository");
import ICounselorBusiness = require("./interfaces/ICounselorBusiness");
import ICounselorModel = require("./../model/interfaces/ICounselorModel");
import CounselorModel = require("./../model/CounselorModel");


class CounselorBusiness implements ICounselorBusiness {
    private _counselorRepository: CounselorRepository;

    constructor () {
        this._counselorRepository = new CounselorRepository();
    }

    create (item: ICounselorModel, callback: (error: any, result: any) => void) {
        this._counselorRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._counselorRepository.retrieve(callback);
    }

    update (_id: string, item: ICounselorModel, callback: (error: any, result: any) => void) {

        this._counselorRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._counselorRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._counselorRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: ICounselorModel) => void) {
        this._counselorRepository.findById(_id, callback);
    }

}


Object.seal(CounselorBusiness);
export = CounselorBusiness;