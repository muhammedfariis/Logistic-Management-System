import { ApiError } from "../../../Errors/Error.js";
import { Messege, Status } from "../../../constants/httpResponse.js";
import logger from "../../../log/logger.js";

class VehicleServices {
  constructor(UserRepository) {
    this.UserRepository = UserRepository;
  }

  // post or create vehicles

  async createVehicles({
    VehiclesNo,
    VehiclesType,
    brand,
    year,
    status,
    currentMilage,
    nextServiceMilage,
    addedBy,
    insuranceExpiry,
    isActive,
    polutionExpiry,
  }) {
    if (
      !VehiclesNo ||
      !VehiclesType ||
      !brand ||
      !year ||
      !status ||
      !currentMilage ||
      !nextServiceMilage ||
      !addedBy ||
      !insuranceExpiry ||
      !isActive ||
      !polutionExpiry
    ) {
      throw new ApiError(Messege.VALIDATION_ERROR, Status.CONFLICT);
    }

    const inserted = await this.UserRepository.findOne(VehiclesNo);
    if (inserted) {
      throw new ApiError(Messege.VEHICLE_ALREADY_FOUND, Status.BAD_REQUEST);
    }
    console.log("finding completed");

    const insertvehicle = await this.UserRepository.create(
      VehiclesNo,
      VehiclesType,
      brand,
      year,
      status,
      currentMilage,
      nextServiceMilage,
      addedBy,
      insuranceExpiry,
      isActive,
      polutionExpiry
    );

    logger.debug("vehicle insertation completed");
    console.log("vehicles inserted");
    if (!insertvehicle) {
      throw new ApiError(Messege.VEHICLE_NOT_CREATED, Status.BAD_REQUEST);
    }

    return {
      message: Messege.VEHICLE_CREATED,
      id: insertvehicle._id,
      insertvehicle,
    };
  }

  //   updating the vehicles

  async updateVehicles({
    VehiclesNo,
    VehiclesType,
    brand,
    year,
    status,
    currentMilage,
    nextServiceMilage,
    addedBy,
    insuranceExpiry,
    isActive,
    polutionExpiry,
  }) {
    if (
      !VehiclesNo ||
      !VehiclesType ||
      !brand ||
      !year ||
      !status ||
      !currentMilage ||
      !nextServiceMilage ||
      !addedBy ||
      !insuranceExpiry ||
      !isActive ||
      !polutionExpiry
    ) {
      throw new ApiError(Messege.VALIDATION_ERROR, Status.CONFLICT);
    }

    const updatevehicle = await this.UserRepository.findByIdAndUpdate(
      VehiclesNo,
      VehiclesType,
      brand,
      year,
      status,
      currentMilage,
      nextServiceMilage,
      addedBy,
      insuranceExpiry,
      isActive,
      polutionExpiry
    );

    if (!updatevehicle) {
      throw new ApiError(Messege.VEHICLE_NOT_UPDATED, Status.BAD_REQUEST);
    }
    return {
      message: Messege.VEHICLE_UPDATED,
      id: updatevehicle._id,
      updatevehicle,
    };
  }

  //  delete vehicles

  async deleteVehicles({
    VehiclesNo,
    VehiclesType,
    brand,
    year,
    status,
    currentMilage,
    nextServiceMilage,
    addedBy,
    insuranceExpiry,
    isActive,
    polutionExpiry,
  }) {
    if (
      !VehiclesNo ||
      !VehiclesType ||
      !brand ||
      !year ||
      !status ||
      !currentMilage ||
      !nextServiceMilage ||
      !addedBy ||
      !insuranceExpiry ||
      !isActive ||
      !polutionExpiry
    ) {
      throw new ApiError(Messege.VALIDATION_ERROR, Status.CONFLICT);
    }

    const deletevehicles = await this.UserRepository.findByIdAndDelete(
      VehiclesNo,
      VehiclesType,
      brand,
      year,
      status,
      currentMilage,
      nextServiceMilage,
      addedBy,
      insuranceExpiry,
      isActive,
      polutionExpiry
    );

    if (!updatevehicle) {
      throw new ApiError(Messege.VEHICLE_NOT_DELETED, Status.BAD_REQUEST);
    }

    return {
      messege: Messege.VEHICLE_DELETED,
      deletedVehicle: deletevehicles,
    };
  }

  //    get all vehicles

  async readVehicles() {
    const getting = await this.UserRepository.find();

    if (!getting) {
      throw new ApiError(Messege.VEHICLE_NOT_FOUND, Status.BAD_REQUEST);
    } else {
      return {
        messege: Messege.VEHICLE_FOUND,
        getting,
      };
    }
  }
}

export default VehicleServices
