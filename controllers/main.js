const jwt = require('jsonwebtoken');
const { BadRequestError }= require('../errors');


const login = async (req, res) => {
    const { username, password } = re.body;


    if (!username || !password) {
        throw new BadRequestError('Please provide email and password')
    }

    // generating an id using date function

    const id = new Date().getDate();

    const token = jwt.sign({id, username}, process.env.JWT_SECRET,{
        expressIn: 300

       
    })

    res.status(200).json({
        msg: 'User created',
        token
    })


}

const dashbord = async (req, res) => {
    const luckyNumber = Math.floor()
}

module.exports = {
    login
}