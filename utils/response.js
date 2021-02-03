module.exports.errorResponse = function(res, status, code, message){
    res.status(status).json({
        status: "error",
        code: code,
        message: message
    });
}

module.exports.successResponse = function(res, status, key, value){
    res.send(status).json({
        status: "ok",
        [key]: value
    })
}