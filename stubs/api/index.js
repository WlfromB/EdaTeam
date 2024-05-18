const router = require('express').Router();

router.get('/recipe-data', (request, response) => {
    response.send(require('../json/recipe-data/success.json'))
  })

router.get('/userpage-data', (req, res)=>{
  res.send(require('../json/userpage-data/success.json'))
})

router.get('/homepage-data', (req, res)=>{
  res.send(require('../json/homepage-data/success.json'))
})

module.exports = router;
