import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadDSAData = () => {
  const dataPath = path.join(__dirname, '../data/dsa.json');
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
};

export const getDSAProblems = async (req, res) => {
  try {
    const { page = 1, limit = 10, topic = '', difficulty = '' } = req.query;
    const data = loadDSAData();

    let problems = data.problems;

    if (topic) {
      problems = problems.filter(p => p.topic.toLowerCase().includes(topic.toLowerCase()));
    }
    if (difficulty) {
      problems = problems.filter(p => p.difficulty === difficulty);
    }

    const startIdx = (page - 1) * limit;
    const paginatedProblems = problems.slice(startIdx, startIdx + parseInt(limit));

    res.json({
      total: problems.length,
      page: parseInt(page),
      limit: parseInt(limit),
      problems: paginatedProblems,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDSATopics = async (req, res) => {
  try {
    const data = loadDSAData();
    const topics = [...new Set(data.problems.map(p => p.topic))];
    res.json({ topics });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
