const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  subscriptionId: { 
    type: String,
  },
  fullName: {
    type: String,
  },
  address : {
    type: String,
  },
  locationName: {
    type: String,
  },
  subCityName: {
    type: String,
  },
  cityName: {
    type: String,
  },
  brand: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  distributorPhoneNumber: {
    type: String,
  },
});


const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;


