import GenreModel, { GenreInput } from "../models/genre.models";

export async function createGenre(input: GenreInput) {
    try {
      const genre = await GenreModel.create(input);
      return genre;
    } catch (error: any) {
      throw new Error(error);
    }
  }

export async function getGenre() {
  try {
    const genre = await GenreModel.find()
    return genre
  } catch (error: any) {
    throw new Error(error)
  }
}