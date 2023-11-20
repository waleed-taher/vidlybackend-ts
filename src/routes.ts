import { Express, Request, Response } from "express";
import { createUserHandler } from "./controllers/user.controller";
import validate from "./middleware/validateResources";
import { createUserSchema } from "./schema/user.schema";
import { createGenreHandler, getGenreHandler } from "./controllers/genre.controller";
import { createGenreSchema } from "./schema/genre.schema";
const routes = (app: Express) => {
  // app.get("/healthcheck", (req: Request, res: Response) => {
  //   res.sendStatus(200);
  // });

  // app.post("/users", validate(createUserSchema), createUserHandler);

  app.post('/api/genres',validate(createGenreSchema), createGenreHandler)
  app.get('/api/genres', getGenreHandler)
};

export default routes;
