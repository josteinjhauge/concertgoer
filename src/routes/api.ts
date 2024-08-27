import {Router} from 'express'
import concertController from '../controllers/concert'
const router= Router();
router.get('/concerts', concertController.getAllConcerts)

export default router;