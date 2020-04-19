import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  name: {type: String, default: ""},
  description: {type: String, default: ""},
  photos: [{type: String, default: ""}],
  thumbnail: {type: String, default: ""}
});
