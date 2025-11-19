import express from 'express';
import { getDBMSQuestions } from '../controllers/dbmsController.js';

const router = express.Router();

router.get('/questions', getDBMSQuestions);

export default router;
