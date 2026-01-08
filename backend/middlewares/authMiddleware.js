import { Messege, Status } from "../constants/httpResponse.js";
import { verifyToken } from "../utils/jwt.js";
import { ApiError } from "../Errors/Error.js";
import logger from "../log/logger.js";

const authValidation = async (req, res, next) => {
  try {
    logger.debug("headers not working");

    const headers = req.headers.authorization;
    logger.debug("headers working");
    if (!headers) {
      throw new ApiError(Status.UNAUTHORIZED, Messege.TOKEN_MISSING);
    }
    logger.debug("token not getted");

    const token = headers.split(" ")[1];
    logger.debug("token getted");
    if (!token) {
      throw new ApiError(Status.BAD_REQUEST, Messege.VALIDATION_ERROR);
    }
    logger.debug("token not verified");
    const payload = verifyToken(token);
    req.user = payload;
    logger.debug("token verified");

    next();
  } catch (err) {
    next(err);
  }
};

export default authValidation;
