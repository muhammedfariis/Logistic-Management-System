import { Messege, Status } from "../constants/httpResponse.js";
import { ApiError } from "../Errors/Error.js";
import logger from "../log/logger.js";

const roleMiddleware = (...roles) => {
  logger.debug("Rolemiddleware working");

  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      throw new ApiError(Status.UNAUTHORIZED, Messege.TOKEN_INVALID);
    }

    logger.debug("ROLE FROM TOKEN:", req.user.role);
    logger.debug("ALLOWED ROLES:", roles);

    if (!roles.includes(req.user.role)) {
      throw new ApiError(Status.FORBIDDEN, Messege.ACCESS_DENIED);
    }

    next();
  };
};

export default roleMiddleware;
