import { Request, Response } from "express";
import { validatePassword } from "../services/user.service";
import { createSession } from "../services/session.service";

export const createUserSessionHandler = async (req: Request, res: Response) => {
  // validate user password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid Credentials Supplied");
  }

  // create Session
  const session = createSession(user._id, req.get("user-agent") || "");

  // access token
  // refresh token
  // return access and refresh token
};
