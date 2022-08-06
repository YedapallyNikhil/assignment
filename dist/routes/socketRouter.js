var expr = require("express");
var socketRouter = function (io) {
    var router = expr.Router();
    router.get("/rera", function (req, res) {
        var msg = req.query.message;
        io.emit("mod", msg);
        res.json({
            message: "successful delivered"
        });
    });
    return {
        router: router
    };
};
module.exports = socketRouter;
