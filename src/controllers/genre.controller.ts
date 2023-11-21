import { Request, Response } from "express";
import log from "../utils/logger";
import {
  createGenre,
  delGenreByID,
  getGenre,
  getGenreByID,
  updateGenre,
} from "../services/genre.service";
import { createGenreInput, genreById } from "../schema/genre.schema";

export const createGenreHandler = async (
  req: Request<{}, {}, createGenreInput["body"]>,
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

export const getGenreHandler = async (
  req: Request<{}, {}, genreById["params"]>,
  res: Response
) => {
  try {
    const genre = await getGenre();
    return res.status(200).send(genre);
  } catch (error: any) {
    log.error(error);
    return res.status(409).send(error.message);
  }
};

export const getGenreHandlerByID = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const genre = await getGenreByID(id);
    if (!genre) {
      return res.status(404).send("Genre not found");
    }

    return res.status(200).json(genre);
  } catch (error: any) {
    log.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

export const delGenreHandlerByID = async (req: Request, res: Response) => {
  try {
    const genre = await delGenreByID(req.params.id);
    if (!genre) {
      return res.status(404).send("Genre Not Found");
    }
    return res.status(200).json({ message: "Genre Deleted", data: genre });
  } catch (error: any) {
    log.error(error.message);
    return res.status(500).send("Internal Server Error");
  }
};

export const updateGenreHandler = async (req: Request, res: Response) => {
  try {
    const genre = await updateGenre(req.params.id, req.body);
    return res.status(200).send(genre);
  } catch (error: any) {
    log.error(error.message);
    return res.status(500).send("Internal Server Error");
  }
};
