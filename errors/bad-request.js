const CustomAPIError = require('./custom-error');
const { StatusCodes } = require('http-status-code');

class BadRequest extends CustomAPIError{
    constructor(message){
        super(message);
        this.StatusCodes = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequest;