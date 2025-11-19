import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  interviewDate: { type: Date, required: true },
  dailyPlan: [
    {
      day: Number,
      date: Date,
      topics: [String],
      completed: { type: Boolean, default: false },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Plan = mongoose.model('Plan', planSchema);
export default Plan;
