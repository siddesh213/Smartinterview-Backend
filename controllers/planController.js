import Plan from '../models/Plan.js';

export const generatePlan = async (req, res) => {
  try {
    const interviewDate = new Date(req.body.interviewDate);
    const today = new Date();
    const daysRemaining = Math.ceil((interviewDate - today) / (1000 * 60 * 60 * 24));

    if (daysRemaining <= 0) {
      return res.status(400).json({ message: 'Interview date must be in the future' });
    }

    const topics = ['DSA Arrays', 'DSA Strings', 'DSA Trees', 'System Design Basics', 'DBMS Concepts', 'OOP Principles'];
    const dailyPlan = [];

    for (let i = 0; i < daysRemaining; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      dailyPlan.push({
        day: i + 1,
        date,
        topics: [topics[i % topics.length]],
        completed: false,
      });
    }

    let existingPlan = await Plan.findOne({ userId: req.user._id });
    if (existingPlan) {
      existingPlan.dailyPlan = dailyPlan;
      existingPlan.interviewDate = interviewDate;
      await existingPlan.save();
    } else {
      existingPlan = await Plan.create({
        userId: req.user._id,
        interviewDate,
        dailyPlan,
      });
    }

    res.status(201).json({ plan: existingPlan });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPlan = async (req, res) => {
  try {
    const plan = await Plan.findOne({ userId: req.user._id });
    if (!plan) {
      return res.status(404).json({ message: 'No plan found' });
    }
    res.json({ plan });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
