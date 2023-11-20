import mongoose from "mongoose";

export interface GenreInput {
    name: string
}

interface GenreDocument extends GenreInput, mongoose.Document {
    createdAt: string,
    updatedAt: string,
}

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength:50
    }
}, {
    timestamps: true
})

const GenreModel = mongoose.model<GenreDocument>('Genre', genreSchema)

export default GenreModel