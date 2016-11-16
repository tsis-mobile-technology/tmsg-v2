import express = require("express");
import CounselorBusiness = require("./../app/business/CounselorBusiness");
import IBaseController = require("./BaseController");
import ICounselorModel = require("./../app/model/interfaces/ICounselorModel");

class CounselorController implements IBaseController <CounselorBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var counselor: ICounselorModel = <ICounselorModel>req.body;
            var counselorBusiness = new CounselorBusiness();
            counselorBusiness.create(counselor, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var counselor: ICounselorModel = <ICounselorModel>req.body;
            var _id: string = req.params._id;
            var counselorBusiness = new CounselorBusiness();
            counselorBusiness.update(_id, counselor, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var counselorBusiness = new CounselorBusiness();
            counselorBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var counselorBusiness = new CounselorBusiness();
            counselorBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var counselorBusiness = new CounselorBusiness();
            counselorBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = CounselorController;