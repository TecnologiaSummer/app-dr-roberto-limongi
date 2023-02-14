import { Router } from 'express';
import adminController from '../controllers/AdminController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, adminController.store);
router.get('/', adminController.index);
router.get('/:id', loginRequired, adminController.show);
router.put('/:id', loginRequired, adminController.update);
router.delete('/:id', loginRequired, adminController.delete);

export default router;

/**
 * index -> lista todos os usuarios -> GET
 * store -> cria um novo usuario, -> POST
 * delete -> apaga um usuario, -> DELETE
 * show -> mostra um usuario, -> GET
 * update -> atualiza um usuario -> PATCH ou PUT
 *
 * OBS: Se o Controller tiver mais que 5 operações talvez seja necessario criar outro
 */
