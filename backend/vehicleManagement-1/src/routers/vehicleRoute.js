import vehicleComposer from "../composers/vehiclesComposers.js";
import UserRoles from "../../../middlewares/roleMiddleware.js"
import Auth from "../../../middlewares/authMiddleware.js"
import express from "express"

const vehicles = vehicleComposer()
const router = express.Router()

router.get("/allvehicles" , Auth , UserRoles("admin") , vehicles.readVehicles)
router.post("/insertvehicle" , Auth , UserRoles("admin") , vehicles.createVehicles)
router.delete("/deletevehicles" , Auth , UserRoles("admin") , vehicles.deleteVehicles)
router.put("/updatevehicles" , Auth , UserRoles("admin") , vehicles.updateVehicles)

export default router

