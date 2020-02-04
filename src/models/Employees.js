const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber:{
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  congregation:{
    type: String,
    required: true,
    default: "5ª Congregação"
  },
  jobTitle:{
    type: String,
    required: true
  },
  profileImage:{
    type: Buffer,
    required: true
  },
  profileImageContentType:{
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now,
  }
});

mongoose.model('Employee', EmployeeSchema);
