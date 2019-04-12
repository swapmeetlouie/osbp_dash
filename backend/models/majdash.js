// Dependency 
const mongoose = require('mongoose');

// Full basic schema declared for future forms
const majSchema = mongoose.Schema({
  majCom: { type: String }, 
  reportDate: { type: String },
  totalSpend: { type: Number },
  sbSpend: { type: Number },
  otsbSpend: { type: Number },
  percSb:  { type: Number },
  goalSb: { type: Number },
  maxSb: { type: Number }, 
  percSdb: { type: Number ,
  goalSdb: { type: Number },
  maxSdb: { type: Number },
  percSdvo: { type: Number },
  goalSdvo: { type: Number },
  maxSdvo: { type: Number },
  percWosb: { type: Number },
  goalWosb: { type: Number },
  maxWosb: { type: Number },
  percHubzone: { type: Number },
  goalHubzone: { type: Number },
  maxHubzone: { type: Number },
  sdbSpend: { type: Number },
  sdvoSpend: { type: Number },
  wosbSpend: { type: Number },
  hubzoneSpend: { type: Number },
  sbColor: { type: String },
  sdbColor: { type: String },
  sdvoColor: { type: String },
  wosbColor: { type: String },
  hubzoneColor: { type: String },
  portName1: { type: String },
  portValue1: { type: Number },  
  portName2: { type: String },
  portValue2: { type: Number },
  portName3: { type: String },
  portValue3: { type: Number },
  portName4: { type: String },
  portValue4: { type: Number },
  portName5: { type: String },
  portValue5: { type: Number },
  portName6: { type: String },
  portValue6: { type: Number },
  }
})

// MongoDB collection defined
module.exports = mongoose.model('dash_fy19', majSchema);