const { errorResponse } = require("../utils/response");

module.exports.userSearch = function(){
    return function(req, res, next){
        let { name } = req.query;
        if(!name){
            errorResponse(res, {
                message: 'User name must not empty'
            })
        }
        else next();
    }
}