import express from "express";
import { protectRoutes } from "../middleware/auth.js";
import { getMessages, getUserForSidebar, markMessageAsSeen } from "../controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.get("/users",protectRoutes,getUserForSidebar);
messageRouter.get("/:id",protectRoutes,getMessages);
messageRouter.put("/mark/:id",protectRoutes,markMessageAsSeen);

export default messageRouter;