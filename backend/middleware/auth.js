import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // Check if the authorization header is missing or not in the expected format
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Not Authorized, no token provided" });
        }

        // Get the token by splitting the "Bearer " prefix
        const token = authHeader.split(" ")[1];

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: "Error, token invalid." });
    }
}

export default authUser;