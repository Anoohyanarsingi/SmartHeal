import express from "express";
import {
    login,
    addNewAdmin,
    addNewDoctor,
    patientRegister,
    getAllDoctors,
    getUserDetails ,
    logoutAdmin,
    logoutPatient,

  } from "../controller/userController.js";
import{
  isAdminAuthenticated,
  isPatientAuthenticated,
}from "../middlewares/auth.js";

const router = express.Router();
router.post("/patient/register", patientRegister);
router.post("/login",login);
router.post("/admin/addnew", addNewAdmin);
router.get("/doctors", getAllDoctors);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
export default router; 
