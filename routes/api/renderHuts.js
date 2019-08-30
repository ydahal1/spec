const express = require('express');
const router = express.Router();

//@route GET api/get
//@des    Huts renderig route
//@access  Public
router.get('/', (req, res) => res.send('Huts rendering route'))

module.exports = router;