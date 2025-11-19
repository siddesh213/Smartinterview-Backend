import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadDBMSData = () => {
  const dataPath = path.join(__dirname, '../data/dbms.json');
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
};

export const getDBMSQuestions = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = loadDBMSData();
    const questions = data.questions;

    const startIdx = (page - 1) * limit;
    const paginatedQuestions = questions.slice(startIdx, startIdx + parseInt(limit));

    res.json({
      total: questions.length,
      page: parseInt(page),
      limit: parseInt(limit),
      questions: paginatedQuestions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
