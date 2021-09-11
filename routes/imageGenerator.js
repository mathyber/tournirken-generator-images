const express = require('express');
const generator = require('../services/generator');
const router = express.Router();
const urlencodedParser = express.urlencoded({extended: false});

router.get('/generator', async function (request, response) {
  // if(!request.body) return response.sendStatus(400);
  // console.log(request.body);
  let image = await generator({});
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.end(image, 'binary');
});

router.post('/generator', urlencodedParser, async function (request, response) {
  if(!request.body) return response.sendStatus(400);
  console.log(request.body);
  let image = await generator(request.body);
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.end(image, 'binary');
});

module.exports = router;
