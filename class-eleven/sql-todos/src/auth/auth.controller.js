import { catchAsync, sendResponse } from "../common/utils.common.js";
import * as authService from "./auth.service.js";
import { loginSchema, registerSchema } from "./auth.schema.js";
import { UnprocessibleEntityError } from "../common/errors.common.js";

export const register = catchAsync(async (req, res) => {
  const result = registerSchema.safeParse(req.body);

  if (result.error)
    throw new UnprocessibleEntityError(
      "The request  failed with the following errors",
      result.error.issues
    );

  const user = await authService.register(result.data);

  sendResponse(res, 201, true, "User registered successfully", user);
});

export const login = catchAsync(async (req, res) => {
  const result = loginSchema.safeParse(req.body);

  if (result.error)
    throw new UnprocessibleEntityError(
      "The request  failed with the following errors",
      result.error.issues
    );

  const { accessToken } = await authService.login(result.data);

  return res.status(200).json({
    success: true,
    message: "User logged in successfully",
    authorization: {
      token: accessToken,
      type: "Bearer",
    },
  });
});

export const getAuthUser = catchAsync(async (req, res) => {
  sendResponse(res, 200, true, "User fetched successfully", req.user);
});
