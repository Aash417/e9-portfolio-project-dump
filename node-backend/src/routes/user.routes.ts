import { Router } from 'express';
import { fetchAll, test, uploadProject } from '../controllers/user.controller';
import { upload } from '../middlewares/multer.middleware';

const router = Router();

router.route('/add').get(test).post(upload.single('image'), uploadProject);
router.route('/fetchAll').get(fetchAll);
export default router;
