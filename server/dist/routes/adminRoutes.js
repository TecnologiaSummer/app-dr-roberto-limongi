"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AdminController = require('../controllers/AdminController'); var _AdminController2 = _interopRequireDefault(_AdminController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.post('/', _loginRequired2.default, _AdminController2.default.store);
router.get('/', _AdminController2.default.index);
router.get('/:id', _loginRequired2.default, _AdminController2.default.show);
router.put('/:id', _loginRequired2.default, _AdminController2.default.update);
router.delete('/:id', _loginRequired2.default, _AdminController2.default.delete);

exports. default = router;

/**
 * index -> lista todos os usuarios -> GET
 * store -> cria um novo usuario, -> POST
 * delete -> apaga um usuario, -> DELETE
 * show -> mostra um usuario, -> GET
 * update -> atualiza um usuario -> PATCH ou PUT
 *
 * OBS: Se o Controller tiver mais que 5 operações talvez seja necessario criar outro
 */
