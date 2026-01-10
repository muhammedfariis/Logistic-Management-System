import { ApiError } from "../../../Errors/Error.js";
import { Messege, Status } from "../../../constants/httpResponse.js";
import logger from "../../../log/logger.js";
import { tokengenarator } from "../../../utils/jwt.js";
import { passwordHash, comparePassword } from "../../../utils/passHash.js";

class AuthService {
  constructor(UserRepository) {
    this.UserRepository = UserRepository;
  }
  async register({ userName, email, password, role }) {

    const existing = await this.UserRepository.findOne(email);
    if (existing) {
      throw new ApiError(Status.CONFLICT, Messege.USER_EXIST);
    }

    const passwordhashed = await passwordHash(password);

    const user = await this.UserRepository.create({
      userName,
      email,
      password: passwordhashed,
      role,
    });

    if (!user) {
      throw new ApiError(Status.BAD_REQUEST, Messege.INVALID_CREDENTIALS);
    }

    return {
      message: Messege.REGISTER_SUCCESS,
      user,
    };
  }

  async login({ email, password }) {
    const user = await this.UserRepository.findOne(email);
    logger.debug("email found");
    if (!user) {
      throw new ApiError(Status.NOT_FOUND, Messege.USER_NOT_FOUND);
    }
    const compare = comparePassword(password, user.password);
    logger.debug("password compared");
    const tokens = tokengenarator(user._id);
    if (!tokens) {
      throw new ApiError(Status.UNAUTHORIZED, Messege.VALIDATION_ERROR);
    }
    return {
      user: user._id,
      user,
      tokens,
    };
  }

  async getAllUsers(){
    const getting = await this.UserRepository.find()
    if(!getting){
      throw new ApiError(Status.NOT_FOUND , Messege.USER_NOT_FOUND)
    }
    return{
      user : getting._id,
      getting
    }
  }
}

export default AuthService;
