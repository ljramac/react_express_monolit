import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
})

export default mongoose.model('file', schema)
