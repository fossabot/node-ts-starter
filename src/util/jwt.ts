import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "./secrets";

export const generateJWT = (
  toBeSignedObj: string | Buffer | object,
  expiresIn?: string | number | undefined,
) => {
  return jwt.sign(toBeSignedObj, ACCESS_TOKEN_SECRET, {
    expiresIn: expiresIn || "1800s",
  });
};
