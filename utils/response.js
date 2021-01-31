module.exports.errorResponse = function(res, error){
    res.json({
        status: false,
        error: error
    })
}

module.exports.successResponse = function(res, message, data){
    res.json({
        status: true,
        message: message,
        data: data
    })
}