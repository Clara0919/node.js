const express = require('express');

////////////////////////////////////////////////////////////

const router = express.Router();
router.get('/', shopController.getIndex);

module.exports = router;

