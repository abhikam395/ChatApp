const { errorResponse } = require("../utils/response");

module.exports.userSearch = function(){
    return function(req, res, next){
        let { name } = req.query;
        if(name == undefined || name == null || name.trim().length == 0){
            res.status(400).json({
                status: 'error',
                message: 'User name is empty'
            })
        }
        else next();
    }
}