import { Router } from 'express';
import grupoPermissaoController from '../controllers/GrupoPermissaoController';
// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/:cd_grupo/permissao/:cd_permissao', grupoPermissaoController.show);

export default router;
