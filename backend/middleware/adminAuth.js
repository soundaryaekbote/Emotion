import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        // Get the token from the standard Authorization header
        const authHeader = req.headers.authorization;
        
        // Check if the header exists and starts with "Bearer "
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.json({ success: false, message: 'Not Authorized, no token provided' });
        }

        const token = authHeader.split(' ')[1];

        // Verify the token and get the decoded payload
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        // Check if the decoded payload contains the isAdmin flag
        if (!token_decode.isAdmin) {
            return res.json({ success: false, message: 'Access denied: Not an admin' });
        }

        // Add the user data to the request body and proceed
        req.body.userId = token_decode.id;
        req.body.isAdmin = token_decode.isAdmin; // Optional but useful
        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error: Token invalid" });
    }
};

export default adminAuth;