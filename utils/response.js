module.exports.errorResponse = function(res, error){
    res.json({
        status: false,
        error: error
    })
}

module.exports.successResponse = function(res, data){
    res.json({
        status: true,
        data: data
    })
}