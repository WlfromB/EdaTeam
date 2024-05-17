const router = require('express').Router();

router.get('/recipe-data', (request, response) => {
    response.send(require('../json/recipe-data/success.json'))
  })

module.exports = router;
