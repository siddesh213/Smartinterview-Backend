import express from 'express';
import { getDSAProblems, getDSATopics } from '../controllers/dsaController.js';

const router = express.Router();

router.get('/problems', getDSAProblems);
router.get('/topics', getDSATopics);

export default router;
