const expr = require("express");

const socketRouter =(io:any)=> {
  const router = expr.Router();

  router.get("/rera", (req:any, res:any) => {
    const msg:any = req.query.message;
   
    io.emit("mod", msg);
    res.json({
      message: "successful delivered",
    });
  });

  return {
    router,
  };
}

module.exports = socketRouter;