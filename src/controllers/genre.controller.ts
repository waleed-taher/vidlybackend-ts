import { Request, Response } from "express";
import log from "../utils/logger";
import { createGenre, getGenre } from "../services/genre.service";

export const createGenreHandler = async (
    req: Request,
    res: Response
  ) => {
    try {
      // calling user creation service to create a user
      const genre = await createGenre(req.body);
      return res.status(201).send(genre);
    } catch (error: any) {
      log.error(error);
      return res.status(409).send(error.message);
    }
  };

  export const getGenreHandler = async (req: Request, res: Response) => {
    try {
      const genre = await getGenre()
    return res.status(200).send(genre)
    } catch (error: any) {
      log.error(error)
      return res.status(409).send(error.message);

    }
    
  }