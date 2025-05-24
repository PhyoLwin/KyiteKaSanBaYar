// models/Image.ts
import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: { type: String, required: true }, // e.g., '/images/buddha1.JPG'
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const Image = mongoose.models.Image || mongoose.model('Image', ImageSchema);
export default Image;
