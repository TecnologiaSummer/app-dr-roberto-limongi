import { Router } from 'express';
import resetPasswordController from '../controllers/ResetPasswordController';

const router = new Router();

router.post('/', resetPasswordController.store);

export default router;
