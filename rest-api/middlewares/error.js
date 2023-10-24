
export const notFound = (req, res, next) => {
    const error = new Error(`not found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}
export const err = (req, res, next) => {
    next(createError(404))
}
export const errorHandler = (err, req, res, next) => {
    console.log(err.message)
    if(!err.statusCode) err.statusCode=500
    res.status(err.statusCode).send(err.message)
}
