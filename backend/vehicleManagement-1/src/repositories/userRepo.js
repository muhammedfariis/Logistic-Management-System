import { BaseRepository } from "./baseRepo.js";
import vehicles from "../models/vehicle.js";

export class UserRepository extends BaseRepository {
  create(user) {
    return vehicles.create(user);
  }
  find(users) {
    return vehicles.find(users);
  }
  findByIdAndUpdate(update) {
    return vehicles.findByIdAndUpdate({ update });
  }
  findByIdAndDelete(remove) {
    return vehicles.findByIdAndDelete({ remove });
  }
  findOne(email){
    return vehicles.findOne({email})
  }
}

