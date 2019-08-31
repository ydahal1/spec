const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Users = require('../../models/Users');

//@route GET api/users
//@des    render Users route
//@access  protected
router.get('/',
    [
        check('email', 'Incorrect email').not().isEmpty().isEmail(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        //Getting items from request to check if the hut is already registered
        const { email } = req.body;
        try {
            //Check if the hut is already registered
            let user = await Users.findOne({
                email
            });
            // if the hut is found to be registered
            if (user) {
                //pulls loggd in users detail from the database
                res.status(200).json(user)
            } 

        } catch (err) {
        //Schema throws err when wrond data type is sent to server
        return res.status(400).json({ errors: [err.errors] })

        }

    })

module.exports = router;


