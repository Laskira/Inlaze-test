import { model, Schema, Document } from "mongoose";

const Message = new Schema({
  TitleMessage: {
    type: String,
    required: true,
  },
  ContentMessage: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
  },
  UserData: {
    Email: {
      type: Schema.Types.String,
      required: true,
    },
    Id: { type: Schema.Types.ObjectId, ref: "User" },
  },
});

export interface IMessage extends Document {
  TitleMessage: String;
  ContentMessage: String;
  Date: Date;
  UserData?: {
    Email: string;
    Id: string;
  };
  IdUser?: object;
}

export default model<IMessage>("Message", Message);
