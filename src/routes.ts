import { Express, Request, Response } from "express";
import validate from "./middleware/validateResources";
import {
  createGenreHandler,
  delGenreHandlerByID,
  getGenreHandler,
  getGenreHandlerByID,
  updateGenreHandler,
} from "./controllers/genre.controller";
import { createGenreSchema, genreByIdSchema } from "./schema/genre.schema";
const routes = (app: Express) => {
  app.post("/api/genres", validate(createGenreSchema), createGenreHandler);
  app.get("/api/genres", getGenreHandler);
  app.get("/api/genres/:id", validate(genreByIdSchema), getGenreHandlerByID);
  app.delete("/api/genres/:id", validate(genreByIdSchema), delGenreHandlerByID);
  app.put("/api/genres/:id", validate(createGenreSchema), updateGenreHandler);
};

export default routes;
