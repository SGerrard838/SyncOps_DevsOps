import express from "express";
import user_controller from "../controllers/user.js";

const router = express.Router();

router.get("/login", user_controller.login);
router.get("/logout", user_controller.logout);
router.post("/login", user_controller.auth);
router.get("/signup", user_controller.register);
router.post("/signup", user_controller.regis);
router.get("/account", user_controller.account);
// router.get("/subscription/:id", user_controller.subscription);
// router.put("/subscription/:id", user_controller.change)


export default router;
