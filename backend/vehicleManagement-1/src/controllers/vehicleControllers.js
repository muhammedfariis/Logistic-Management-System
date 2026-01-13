import { ApiError } from "../../../Errors/Error.js";

class VehicleControllers {
  constructor(VehicleServices) {
    this.VehicleServices = VehicleServices;
  }

  createVehicles = async (req, res, next) => {
    try {
      const created = await this.VehicleServices.createVehicles(req.body);
      if (created) {
        res.json(created);
      }
    } catch (errr) {
      next(errr);
    }
  };

  updateVehicles = async (req, res, next) => {
    try {
      const updated = await this.VehicleServices.updateVehicles(req.body);
      if (updated) {
        res.json(updated);
      }
    } catch (errr) {
      next(errr);
    }
  };

  deleteVehicles = async (req, res, next) => {
    try {
      const deleted = await this.VehicleServices.deleteVehicles(req.body);
      if (deleted) {
        res.json(deleted);
      }
    } catch (errr) {
      next(errr);
    }
  };

  readVehicles = async (req, res, next) => {
    try {
      const read = await this.VehicleServices.readVehicles(req.body);
      if (read) {
        res.json(read);
      }
    } catch (errr) {
      next(errr);
    }
  };
}

export default VehicleControllers
