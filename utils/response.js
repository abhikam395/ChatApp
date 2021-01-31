module.exports.errorResponse = function(res, error){
    res.json({
        status: false,
        error: error
    })
}

module.exports.successResponse = function(res, data, message){
    res.json({
        status: true,
        message: message,
        data: data
    })
}