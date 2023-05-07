//BASIC RIDDLE ROUTES

const express = require('express');
const riddleController = require('../controllers/riddleController');
const router = express.Router();

router.get('/create', riddleController.riddle_create_get);
router.get('/', riddleController.riddle_index);
router.post('/', riddleController.riddle_create_post);
router.get('/:id', riddleController.riddle_details);
router.delete('/:id', riddleController.riddle_delete);

module.exports = router;