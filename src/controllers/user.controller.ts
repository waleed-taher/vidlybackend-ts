import { Request, Response } from "express";
import log from "../utils/logger";
import { createUser } from "../services/user.service";
import { CreateUserInput } from "../schema/user.schema";
import { omit } from "lodash";

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) => {
  try {
    // calling user creation service to create a user
    const user = await createUser(req.body);
    return res.status(201).send(omit(user.toJSON(), "password"));
  } catch (error: any) {
    log.error(error);
    return res.status(409).send(error.message);
  }
};


