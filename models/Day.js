const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
  date: {
    type: String
    //default: (new Date()).toISOString().split('T')[0]
  },

  owner: { type: Schema.Types.ObjectId, ref: 'User' },

  foods: [{
    startTime: String,
    name: String,
    imgUrl: String,
    portion: Number, 
    eatenPortion: Number, 
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }]
  }],

  drinks: [{
    startTime: String,
    name: String,
    imgUrl: String,
    brand: String,
    category: String,
    servingAmount: Number,
    servingSize: String,
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }]
  }],

  
  exercises: [{
    name: String,
    startTime: String, // need to check it 
    duration: Number, // minutes or hours
    intensityLevel: Number
  }],

  sleep: [{
    startTime: String, // need to check it 
    duration: Number, // minutes or hours
    notes: String
  }],
  
  symptoms: [{
    name: String,
    startTime: String,
    duration: Number,
    intensity: Number,
    notes: String
  }],
  
  energy: {
    startTime: String,
    energyLevel:Number
  }
},

{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  },
}

);


const Day = mongoose.model('Day', daySchema);
module.exports = Day;