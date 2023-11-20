import mongoose from "mongoose";
import { UserDocument } from "./user.models";

export interface session {
  user: UserDocument["_id"];
  valid: Boolean;
  userAgent: string;
}
export interface SessionDocument extends session, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
  },
  {
    timestamps: true,
  }
);

const SessionModel = mongoose.model("Session", sessionSchema);

export default SessionModel;
