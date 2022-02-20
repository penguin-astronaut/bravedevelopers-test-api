import mongoose from "mongoose";

const Operator = new mongoose.Schema({
  name: {type: String, required: true},
  img: {type: String, required: true},
  color: {type: String, required: true},
  slug: {type: String, required: true},
  isUserCreated: {type: Boolean, default: false}
})

export default mongoose.model('Operator', Operator)