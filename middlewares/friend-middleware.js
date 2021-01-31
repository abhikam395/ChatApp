let { errorResponse } = require('./../utils/response');

module.exports.follow = function(){
    return function(req, res, next){
        let { followerId, followeeId } = req.query;
        if (followerId == 0 || followeeId == 0){
            errorResponse(res, { message: 'Empty fields'})
        }
        else if(followerId == followeeId ){
            errorResponse(res, { message: `You can't follow yourself` })
        }
        else
            next();
    }
}