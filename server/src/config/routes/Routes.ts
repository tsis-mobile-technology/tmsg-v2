/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
import express = require('express');
import path = require('path');

import HeroRoutes = require('../routes/HeroRoutes');
import CounselorRoutes = require('../routes/CounselorRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/heroes", new HeroRoutes().routes);
        app.use("/counselors", new CounselorRoutes().routes);
        
        return app;
    }
}
export = Routes;