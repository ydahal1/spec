const mongoose = require("mongoose");

const HutsSchema = new mongoose.Schema({
  familyLastName: {
    type: String,
    require: true
  },
  camp: {
    type: String,
    require: true
  },
  sector: {
    type: String,
    require: true
  },
  unit: {
    type: Number,
    require: true
  },
  hutNumber1: {
    type: Number,
    require: true
  },
  hutNumber2: {
    type: Number
  },
  district: {
    type: String,
    required: true
  },
  village: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    default: "No phone number on file"
  },
  members: {
    type: Array,
    required: true
  },
  familyStory: {
    type: String,
    default: ""
  },
  registeredBy: {
    type: Array,
    required: true
  },
  registeredOn: {
    type: Date,
    default: Date.now
  },
  verifiedInformation: {
    type: Boolean,
    default: false
  },
  featureThisFamily: {
    type: Boolean,
    default: false
  },
  comments: {
    type: Array,
    default: [String]
  },
  numberOfFlags: {
    type: Number,
    default: 0
  }
});

//This is where you specify which collection you want the data to be saved.
module.exports = Huts = mongoose.model("Huts", HutsSchema);
