import {Router} from "express";
import OperatorController from './OperatorController.js'

const router = new Router();

router.get('/', OperatorController.getAll)
router.get('/:slug', OperatorController.getOne)
router.post('/', OperatorController.create)

export default router;