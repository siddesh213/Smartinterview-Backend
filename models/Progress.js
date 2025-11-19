import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dsaSolved: { type: Number, default: 0 },
  systemDesignCompleted: { type: Number, default: 0 },
  dbmsCompleted: { type: Number, default: 0 },
  dsaCompletedItems: [{ type: String }],
  systemDesignCompletedItems: [{ type: String }],
  dbmsCompletedItems: [{ type: String }],
  streak: { type: Number, default: 0 },
  lastActiveDate: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Progress = mongoose.model('Progress', progressSchema);
export default Progress;