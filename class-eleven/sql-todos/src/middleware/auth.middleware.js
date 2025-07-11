import { decodeAccessToken } from "../common/utils.common.js";
import { UnauthenticatedError } from "../common/errors.common.js";

export const checkAuthentication = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Invalid or missing token");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = decodeAccessToken(token);

    req.user = decoded;
    next();
  } catch (error) {
    throw new UnauthenticatedError("Invalid or expired token");
  }
};
