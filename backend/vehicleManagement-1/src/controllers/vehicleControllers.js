class VehicleControllers {
  constructor(VehicleServices) {
    this.VehicleServices = VehicleServices;
  }

  createVehicles = async (req, res, next) => {
    try {
      const created = await this.VehicleServices.createVehicles(req.body);
      res.json(created);
    } catch (err) {
      next(err);
    }
  };

  updateVehicles = async (req, res, next) => {
    try {
      const updated = await this.VehicleServices.updateVehicles(req.body);
      res.json(updated);
    } catch (err) {
      next(err);
    }
  };

  deleteVehicles = async (req, res, next) => {
    try {
      const deleted = await this.VehicleServices.deleteVehicles(req.body);
      res.json(deleted);
    } catch (err) {
      next(err);
    }
  };

  readVehicles = async (req, res, next) => {
    try {
      const read = await this.VehicleServices.readVehicles();
      res.json(read);
    } catch (err) {
      next(err);
    }
  };
}

export default VehicleControllers;
