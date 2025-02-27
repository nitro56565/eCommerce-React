import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



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

       
        if (!user) {
            return res.json({ Login: false, Message: "No user found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ Login: false, Message: "Invalid password" });
        }

        const accessToken = jwt.sign({ email: email }, 'jwt-access-token-secret-key', { expiresIn: '1m' });
        const refreshToken = jwt.sign({ email: email }, 'jwt-refresh-token-secret-key', { expiresIn: '5m' });

     
        res.cookie('accessToken', accessToken, { 
            maxAge: 60000, 
            httpOnly: true, 
            secure: true, 
            sameSite: 'strict' 
        });

        res.cookie('refreshToken', refreshToken, { 
            maxAge: 300000, 
            httpOnly: true, 
            secure: true, 
            sameSite: 'strict' 
        });

        return res.json({ Login: true, Message: "Login successful" });

    } catch (err) {
        console.error("Login Error:", err);
        return res.status(500).json({ Login: false, Message: "Internal server error" });
    }
};


const verifyUser = (req, res, next) => {
    const accesstoken = req.cookies.accessToken;
    if (!accesstoken) {
        if (renewToken(req, res)) {
            next()
        }

    } else {
        jwt.verify(accesstoken, 'jwt-access-token-secret-key', (err, decoded) => {
            if (err) {
                return res.json({ valid: false, msg: 'invalid token' })
            } else {
                req.email = decoded.email;
                next()
            }
        })
    }
}

const renewToken = (req, res) => {
    const refreshtoken = req.cookies.refreshToken;
    let exist = false
    if (!refreshtoken) {
        return res.json({ valid: false, msg: 'no refresh token' })

    } else {
        jwt.verify(refreshtoken, 'jwt-refresh-token-secret-key', (err, decoded) => {
            if (err) {
                return res.json({ valid: false, msg: 'invalid refresh token' })
            } else {
                const accessToken = jwt.sign({ email: decoded.email }, 'jwt-access-token-secret-key', { expiresIn: '1m' })

                res.cookie('accessToken', accessToken, { maxAge: 60000 })
                


            }
        })
    }
    exist = true;
    return exist;

}

export const dashboard = (verifyUser, (req, res) => {
    return res.json({ valid: true, message: "authorized" })
})

