import { object, string } from "zod";

export const createGenreSchema = object({
    body: object({
        name: string({
            required_error: "Name is Required",
        }),
    })
})