const express = require('express')
const router = express.Router()
const {callApi} = require('../Controller/openaiController')

router.post('/callapi', callApi)


module.exports = router;

