const express = require('express');
const router = express.Router();

const helloService = require('../service/helloService')
// Get tea tree
router.get('/', async (req, res) => {
    let messages = await helloService.getHelloMessages();
    res.send(messages);
})

module.exports = router;