const Express = require('express');
const router = Express.Router();
const controller = require('./controllers/controller');

router.get('/party', controller.getAllChildren);

router.get('/confirmed', controller.getConfirmedChildren);

router.get('/declined', controller.getDeclinedChildren);

router.get('/unconfirmed', controller.getUnconfirmedChildren);

router.get('/nonuts', controller.getNoNuts);

router.get('/nodairy', controller.getNoDairy);

router.post('/party', controller.addChild);

module.exports = router;
