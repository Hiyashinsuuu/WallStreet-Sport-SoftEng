import jwt from "jsonwebtoken";
import { adminLoginSchema } from "../utils/validator";
import { Request, Response } from "express";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "password";

interface AdminLoginRequestBody {
    username: string;
    password: string;
}

export const adminLogin = (req: Request<{}, {}, AdminLoginRequestBody>, res: Response): Response | void => {
    try {
        const { username, password } = adminLoginSchema.parse(req.body);

        if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { username, role: "admin" },
            process.env.JWT_SECRET || "secret",
            { expiresIn: "2h" }
        );

        res.json({ token });
    } catch (err: any) {
        res.status(400).json({ errors: err.errors });
    }
};
