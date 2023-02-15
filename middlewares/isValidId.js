const {isValidObjectId} = require("mongoose");
const RequestError = require("../helpers/RequestError")

const isValidId = (req, _, next) => {
    const {id} = req.params;
    const isCorrectId = isValidObjectId(id);
    if(!isCorrectId) {
        const error = RequestError(400, `${id} is not corrent id format`);
        console.log(error);
        next(error);
    }
    next();
}

module.exports = isValidId;