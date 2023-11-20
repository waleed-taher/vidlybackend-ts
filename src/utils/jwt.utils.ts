import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get("privateKey");
const publickKey = config.get("publicKey");

const signJWT = () => {
  // SignJWT Token
};

const verifyJWT = () => {
  // verify JWT token
};
