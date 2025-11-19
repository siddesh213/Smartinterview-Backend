import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadSystemDesignData = () => {
  const dataPath = path.join(__dirname, '../data/system_design.json');
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
};

export const getTopics = async (req, res) => {
  try {
    const data = loadSystemDesignData();
    res.json({ topics: data.topics });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTopic = async (req, res) => {
  try {
    const { id } = req.params;
    const data = loadSystemDesignData();
    const topic = data.topics.find(t => t.id === parseInt(id));
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }
    res.json({ topic });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
