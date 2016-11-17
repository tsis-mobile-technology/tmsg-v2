import express = require("express");
import CounselorController = require("./../../controllers/CounselorController");

var router = express.Router();
class CounselorRoutes {
    private _counselorController: CounselorController;

    constructor () {
        this._counselorController = new CounselorController();
    }
    get routes () {
        var controller = this._counselorController;

        router.get("/", controller.retrieve);
        router.post("/", controller.create);
        router.put("/:_id", controller.update);
        router.get("/:_id", controller.findById);
        router.delete("/:_id", controller.delete);

        return router;
    }
}

Object.seal(CounselorRoutes);
export = CounselorRoutes;