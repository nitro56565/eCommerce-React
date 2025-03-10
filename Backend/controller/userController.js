import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();



export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            console.log("email exist")
            return res.status(400).json({ error: "Email already in use" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({ name, email, password: hashedPassword })
        console.log(newUser)

        res.status(201).json({ msg: "User registered successfully" })
    } catch (err) {
        res.status(500).json({ msg: "Internal server error" })
    }

}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user ) {
            return res.json({ Login: false, Message: "No user found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ Login: false, Message: "Invalid password" });
        }

        // ✅ Include `user_id` in JWT token payload
        // ✅ Generate Tokens
        const accessToken = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_ACCESS_SECRET, { expiresIn: "1m" });
        const refreshToken = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });

        // ✅ Store Tokens in httpOnly Cookies
        res.cookie("accessToken", accessToken, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "Lax", maxAge: 60 * 1000 });
        res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "Lax", maxAge: 7 * 24 * 60 * 60 * 1000 });

        
        return res.json({ Login: true, Message: "Login successful" });

    } catch (err) {
        console.error("Login Error:", err);
        return res.status(500).json({ Login: false, Message: "Internal server error" });
    }
};



export const verifyUser = async (req, res, next) => {
    let accessToken = req.cookies.accessToken;

    if (!accessToken) {
        console.warn("❌ No Access Token Found! Trying to Refresh...");

        // ✅ Wait for refreshToken to return a new access token
        const newToken = await renewToken(req, res);
        if (!newToken) {
            return res.status(401).json({ valid: false, msg: "Unauthorized - No valid token" });
        }
        accessToken = newToken; // ✅ Use the new access token
    }

    jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
        if (err) {
            console.error("❌ Invalid Access Token:", err);
            return res.status(401).json({ valid: false, msg: "Invalid access token" });
        }

        req.user = { id: decoded.id, email: decoded.email }; // ✅ Attach user info
        next();
    });
};



const renewToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        console.warn("❌ No Refresh Token Found!");
        return null;
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

        // ✅ Generate a New Access Token
        const newAccessToken = jwt.sign(
            { id: decoded.id, email: decoded.email },
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: "1m" }
        );

        // ✅ Send the new token as a cookie
        res.cookie("accessToken", newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Lax",
            maxAge: 60 * 1000,
        });

        return newAccessToken; // ✅ Return the new token so `verifyUser` can use it

    } catch (err) {
        console.error("❌ Refresh Token Expired:", err);
        return null;
    }
};


export const refreshTokenAPI = async (req, res) => {
    const newAccessToken = await renewToken(req, res);
    if (!newAccessToken) {
        return res.status(403).json({ message: "Unauthorized - Refresh token expired" });
    }
    res.status(200).json({ accessToken: newAccessToken });
};


export const getUser = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized - No valid token" });
    }
    res.status(200).json({ user: req.user });
};
