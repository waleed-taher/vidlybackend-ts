import GenreModel, { GenreInput } from "../models/genre.models";
import log from "../utils/logger";

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
    const genre = await GenreModel.find().sort({ name: 1 });
    return genre;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getGenreByID(input: string) {
  try {
    const genre = await GenreModel.findById(input);
    if (!genre) {
      throw new Error("Genre not found");
    }
    return genre;
  } catch (error: any) {
    log.error(error);
    throw new Error("Error fetching genre");
  }
}

export async function delGenreByID(params: string) {
  try {
    const genre = await GenreModel.findByIdAndDelete(params);
    if (!genre) {
      throw new Error("Genre not found");
    }
    return genre;
  } catch (error) {
    log.error(error);
    throw new Error("Error fetching genre");
  }
}

export async function updateGenre(params: string, input: GenreInput) {
  try {
    const genre = await GenreModel.findByIdAndUpdate(params, input, {
      new: true,
    });
    return genre;
  } catch (error) {
    log.error(error);
    throw new Error("Error fetching genre");
  }
}
