const Express = require('express');
const router = Express.Router();
const controller = require('./controllers/controller');

router.get('/party', controller.getAllChildren);

router.get('/confirmed', controller.getConfirmedChildren);

router.get('/declined', controller.getDeclinedChildren);

router.get('/unconfirmed', controller.getUnconfirmedChildren);

router.get('/nonuts', controller.getNoNuts);

router.get('/nodairy', controller.getNoDairy);

router.get('/nonutsordairy', controller.noNutsOrDairy);

router.post('/party', controller.addChild);

router.post('/budget', controller.addBudget);

router.get('/budget', controller.fetchBudget);

router.delete('/party', controller.deleteChildren);

module.exports = router;
