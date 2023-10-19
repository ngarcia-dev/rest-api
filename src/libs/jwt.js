import Jwt from "jsonwebtoken"; // modulo de token para session login
import { TOKEN_SECRET } from "../config.js";

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    Jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: "1d", // tiempo de expiración
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};
