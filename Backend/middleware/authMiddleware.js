import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const authMiddleware = (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1]; // From Authorization header

  // ✅ Also check cookies if the token isn't in the header
  if (!token && req.cookies) {
    token = req.cookies.refreshToken; // Get token from cookies
  }

  if (!token) {
    return res.status(401).json({ message: "Unauthorized - No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET); // ✅ Ensure correct secret
    req.user = decoded; // Attach user data
    next();
  } catch (error) {
    console.error("❌ Invalid Token:", error.message);
    return res.status(403).json({ message: "Unauthorized - Invalid token" });
  }
};
