const mongoose = require('../party-db');

const Schema = mongoose.Schema;

const partySchema = new Schema({
  childName: String,
  parentName: String,
  telNumber: String,
  dairy: Boolean,
  nuts: Boolean,
  attending: String,
});

const Party = mongoose.model('party', partySchema);

module.exports = Party;
