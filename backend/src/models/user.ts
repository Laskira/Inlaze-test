import { model, Schema, Document } from "mongoose";

const User = new Schema({
  Email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  Name: {
    type: String,
    required: true
  },
  Nickname: {
    type: String,
    unique: true,
    required: true
  },
  Password: {
    type: String,
    required: true
  }
});

export interface IUser extends Document {
  Email: string;
  Name: String;
  Nickname: String;
  Password: string;
};


export default model<IUser>("User", User);