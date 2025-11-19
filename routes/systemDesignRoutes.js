import express from 'express';
import { getTopics, getTopic } from '../controllers/systemDesignController.js';

const router = express.Router();

router.get('/topics', getTopics);
router.get('/:id', getTopic);

export default router;
