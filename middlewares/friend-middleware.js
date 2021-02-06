let { errorResponse } = require('./../utils/response');

module.exports.followMiddleware = function(){
    return function(req, res, next){
        console.log(req.body)
        let { followerId, followeeId } = req.body;
        console.log(req.body)

        if (followerId == undefined || followerId == 0 ){
            res.status(400).json({
                status: 'error',
                code: 'EmptyField',
                message: 'You have missed followerId'
            })
        }
        if(followeeId == undefined || followeeId == 0){
            res.status(400).json({
                status: 'error',
                code: 'EmptyField',
                message: 'You have missed followeeId'
            })
        }
        if(followerId == followeeId ){
            res.status(400).json({
                status: 'error',
                code: 'SelfFollow',
                message:  "You can't follow yourself"  
            })
        }
        else
            next();
    }
}