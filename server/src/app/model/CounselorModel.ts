import ICounselorModel = require('./interfaces/ICounselorModel');

class CounselorModel {

    private _counselorModel: ICounselorModel;

    constructor(counselorModel: ICounselorModel) {
        this._counselorModel = counselorModel;
    }

    get idx(): number {
        return this._counselorModel.idx;
    }
    
    get loginid(): string {
        return this._counselorModel.loginid;
    }

    get status(): number {
        return this._counselorModel.status;
        // (1: 상담 중, 2: 대기, 3: 후처리, 4: 휴식)
    }

    get name(): string {
        return this._counselorModel.name;
    }

    get password(): string {
        return this._counselorModel.password;
    }

    get issaveid(): boolean {
        return this._counselorModel.issaveid;
    }

    get isautologin(): boolean {
        return this._counselorModel.isautologin;
    }

    get checkin(): Date {
        return this._counselorModel.checkin;
    }
    
}
Object.seal(CounselorModel);
export =  CounselorModel;