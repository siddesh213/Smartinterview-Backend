import User from '../models/User.js';
import Plan from '../models/Plan.js';

export const setUserType = async (req, res) => {
  try {
    const { userType } = req.body;
    if (!['student', 'professional'].includes(userType)) {
      return res.status(400).json({ message: 'Invalid user type' });
    }

    const user = await User.findByIdAndUpdate(req.user._id, { userType }, { new: true });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const setInterviewDate = async (req, res) => {
  try {
    const { interviewDate } = req.body;
    const user = await User.findByIdAndUpdate(req.user._id, { interviewDate }, { new: true });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
