const authenticatioMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authoriation;

    if (!authHeader || !authHeader.startsWith('Bearer ')){

    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username }
        next();
    } catch (error) {
        throw new UnauthenticationError('Not authroized to access this route ')
        
    }
}

module.exports = authenticatioMiddleware