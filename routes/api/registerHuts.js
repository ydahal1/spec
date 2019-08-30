const express = require('express');
const { check, validationResult} = require('express-validator');
const router = express.Router();
const Huts = require('../../models/Huts');

//@route POST api/huts
//@des    register Huts route
//@access  Public
router.post('/', 
[
    check('familyLastName', 'Family Last Name is required').not().isEmpty(),

    check('camp', 'Please select Camp').not().isEmpty(),
    check('sector', 'Please select Sector').not().isEmpty(),
    check('unit', 'Please select Unit').not().isEmpty(),
    check('hutNumber1', 'Hut number is incorrect').not().isEmpty(),

    check('district', 'incorrect district entered').not().isEmpty(),
    check('village', 'incorrect village entered').not().isEmpty(),

    check('country', 'Please select country').not().isEmpty(),
    check('state', 'state is incomplete').not().isEmpty(),
    check('city', 'Camp address is incomplete').not().isEmpty(),
    check('phone', 'Invalid phone number').isMobilePhone(),

    check('members', 'Atleast one member should be listed').not().isEmpty(),
    
],
async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    //Getting items from request to check if the hut is already registered
    
    const {camp} = req.body;
    const{sector} = req.body;
    const{unit}=req.body;
    const{hutNumber1} = req.body;
   

    try{
        //Tests:
        // console.log(familyLastName);
        console.log(typeof registeredOn);
        console.log(typeof familyStory)

        //Check if the hut is already registered
        let hut = await Huts.findOne({
            $and :[{camp,sector, unit, hutNumber1}]
            
                        });
            // if the hut is found to be registered
            if(hut){
                res.status(400).json({errors : [{msg: 'This hut is already registered'}]})
            }else{

                //I AM HERE ....
                hut.save();
                res.json(req.body);


            }

    }catch(err){
        console.error(err.message);
        res.status(500).send('server error')
    }
    
   })

module.exports = router;


