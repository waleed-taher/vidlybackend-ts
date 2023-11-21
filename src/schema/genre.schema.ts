import { TypeOf, number, object, string } from "zod";

export const createGenreSchema = object({
  body: object({
    name: string({
      required_error: "Name is Required",
    }),
  }),
});

export const genreByIdSchema = object({
  params: object({
    id: string({
      required_error: "Id is Required",
    }),
  }),
});

export type genreById = TypeOf<typeof genreByIdSchema>;

export type createGenreInput = TypeOf<typeof createGenreSchema>;
