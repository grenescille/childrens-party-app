const Express = require('express');
const router = Express.Router();
const controller = require('../controllers/controller');

router.get('/', (req, res) => {
  res.send('hello world');
});

router.get('/allchildren', controller.getAllChildren);

router.get('/confirmed', controller.getConfirmedChildren);

router.get('/declined', controller.getDeclinedChildren);

router.get('/unconfirmed', controller.getUnconfirmedChildren);

router.post('/party', controller.addChild);

module.exports = router;
