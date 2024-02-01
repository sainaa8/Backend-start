import express from "express";
import { getUserByEmailService } from "../controllers/usersController.js";
import { getAllUsers } from "../controllers/allUserController.js";
import { createNesUser } from "../controllers/allUserController.js";
import { deletedInCon } from "../controllers/allUserController.js";
import { updatePart } from "../controllers/allUserController.js";
import { PostreqToRo } from "../controllers/allUserController.js";
import { MiddlewareOfLogin } from "../middleware/auth.js";
const userRouter = express.Router();

// get

userRouter.get("/users/:email", getUserByEmailService);
// userRouter.get("/user/:emai")

userRouter.get("/users", getAllUsers);
userRouter.post("/users", createNesUser);
userRouter.delete("/users", deletedInCon);
userRouter.put("/user/:email", updatePart);

userRouter.post("/user/login", MiddlewareOfLogin, PostreqToRo);
//post

//put

//delete

export default userRouter;
