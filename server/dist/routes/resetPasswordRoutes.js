"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ResetPasswordController = require('../controllers/ResetPasswordController'); var _ResetPasswordController2 = _interopRequireDefault(_ResetPasswordController);

const router = new (0, _express.Router)();

router.post('/', _ResetPasswordController2.default.store);

exports. default = router;
