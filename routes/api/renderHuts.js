const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Huts = require('../../models/Huts');

//@route GET api/get
//@des    Huts renderig route
//@access  Public
router.get('/',
    [
        check('camp', 'Please select Camp').not().isEmpty(),
        check('sector', 'Please select Sector').not().isEmpty(),
        check('unit', 'Please select Unit').not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        //Getting items from request to check if the hut is already registered
        const { camp, sector, unit } = req.body;

        try {
            //Check if user's unit has any registered huts
            let hut = await Huts.find({
                $and: [{ camp, sector, unit }]

            });
            // if the hut is found to be registered
            if (hut) {
                res.status(200).json(hut)
            } else {
                res.status(200).json("huts not found");
            }

        } catch (err) {
            //Schema throws err when wrond data type is sent to server
            res.status(400).json({ errors: [{ err }] })
        }

    })

module.exports = router;


