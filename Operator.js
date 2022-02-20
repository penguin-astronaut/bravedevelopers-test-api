import mongoose from "mongoose";

const Post = new mongoose.Schema({
  name: {type: String, required: true},
  img: {type: String, required: true},
  color: {type: String, required: true},
  slug: {type: String, required: true}
})

export default mongoose.model('Post', Post)