import { Router } from "express";
import { 
    loginUser, 
     
    registerUser, 
    refreshAccessToken, 
    
    
   
} from "../controllers/user.controller.js";



const router = Router()

router.post("/register",registerUser)
   
   

router.post("/login",loginUser)


router.post("/refreshAccesstoken",refreshAccessToken)





export default router