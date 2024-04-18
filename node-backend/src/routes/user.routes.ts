import { Router } from 'express';
import { test, uploadProject } from '../controllers/user.controller';
import { upload } from '../middlewares/multer.middleware';

const router = Router();

router.route('/add').get(test).post(upload.single('image'), uploadProject);

export default router;
