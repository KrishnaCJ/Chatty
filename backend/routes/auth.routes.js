import express from "express";
import { logout, signup, login } from "../controllers/auth.controllers.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
// router.post("/login", (req, res) => {
//   res.send("Login route");
// });

export default router;
