import { Router } from "express";
import {
  // changeCurrentPassword,
  // forgotPasswordRequest,
  // getCurrentUser,
  // login,
  // logoutUser,
  // refreshAccessToken,
  registerUser
  // resendEmailVerification,
  // resetForgotPassword,
  // verifyEmail,
} from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
//   userChangeCurrentPasswordValidator,
//   userForgotPasswordValidator,
//   userLoginValidator,
  userRegisterValidator,
//   userResetForgotPasswordValidator,
} from "../validators/index.js";
// import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// unsecured route
// router.route("/register").post(registerUser);//goes when /register is hit it starts executing registerUser
router.route("/register").post(userRegisterValidator(), validate, registerUser);
                               //checks for validation of data and generates data about
                                                       //collect all the data and throws error if there is any error present
                                                                //If no error raised by middleware validate registerUser runs
                              //notice 
                              // userRegisterValidator() has vracket but validate and registerUser has not bracket because in there defination they has (req,res,next) but the 
                              // userRegisterValidator() has nothing so we have to run the method                                 
// router.route("/login").post(userLoginValidator(), validate, login);
// router.route("/verify-email/:verificationToken").get(verifyEmail);
// router.route("/refresh-token").post(refreshAccessToken);
// router
//   .route("/forgot-password")
//   .post(userForgotPasswordValidator(), validate, forgotPasswordRequest);
// router
//   .route("/reset-password/:resetToken")
//   .post(userResetForgotPasswordValidator(), validate, resetForgotPassword);

// //secure routes
// router.route("/logout").post(verifyJWT, logoutUser);
// router.route("/current-user").post(verifyJWT, getCurrentUser);
// router
//   .route("/change-password")
//   .post(
//     verifyJWT,
//     userChangeCurrentPasswordValidator(),
//     validate,
//     changeCurrentPassword,
//   );
// router
//   .route("/resend-email-verification")
//   .post(verifyJWT, resendEmailVerification);

export default router;
