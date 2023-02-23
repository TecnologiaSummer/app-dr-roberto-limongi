import { Router } from 'express';
import grupoController from '../controllers/GrupoController';
// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', grupoController.store);
router.get('/', grupoController.index);
router.get('/:id', grupoController.show);
router.put('/:id', grupoController.update);
router.delete('/:id', grupoController.delete);

export default router;
