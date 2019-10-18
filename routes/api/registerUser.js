const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Users = require('../../models/Users');

//@route POST api/users
//@des    register Users route
//@access  protected
router.post('/',
    [
        // check('firstName', 'Incorrect first name ....').not().isEmpty().isAlpha(),
        // check('lastName', 'Incorrect last name ...').not().isEmpty().isAlpha(),
        check('camp', 'Incorrect camp').not().isEmpty(),
        check('sector', 'Please select Sector').not().isEmpty().isAlpha(),
        check('unit', 'Please select Unit').not().isEmpty(),
        check('hutNumber1', 'Hut number is incorrect').not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        //Getting items from request to check if the user is already registered
        const { 
            firstName,
            lastName,
            camp,
            sector,
            unit,
            hutNumber1,
            hutNumber2,
            faceBookID,
            email } = req.body;


        try {

            //Check if the hut is already registered
            let user = await Users.findOne({
                email
            });
            // if the email is found to be registered
            if (user) {
                res.status(200).json({ userRegistered: true  })
            } else {
                user = new Users({
                    firstName,
                    lastName,
                    camp,
                    sector,
                    unit,
                    hutNumber1,
                    hutNumber2,
                    faceBookID,
                    email        
                })

                user.save(function (err){
                    //throws error when ther issue with savin data
                    if(err){
                        return res.status(400).json({ errors: [err.errors] })

                    }else{
                        res.json(req.body);
                    }
                });
            }

        } catch (err) {
            //Schema throws err when wrond data type is sent to server
            return res.status(400).json({ errors: [err.errors] })

        }

    })

module.exports = router;


