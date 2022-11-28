const express = require('express')

const router = express.Router()

router.get('/status', (req, res) => {
	res.status(200).json({ message: 'ok' })
})

module.exports = router