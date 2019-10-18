const express = require("express");
const router = express.Router();
const Users = require("../../models/Users");
const { check, validationResult } = require("express-validator");

//@route POST api/users
//@des    Get logged in user's detail from the db
//@access  protected

router.post(
  "/",
  [
    check("email", "E-mail is incorrect")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const { email } = req.body;

      try {
        let user = await Users.findOne({
          email: email
        });
        if (user) {
          res.send({ user });

          //the data below should be stored in global state
          console.log(user);
        } else {
          res.send({ userRegistered: false });
        }
      } catch (err) {
        return res.status(400).json({ errors: [err.errors] });
      }
    }
  }
);

module.exports = router;
