const mongoose = require('../party-db');

const Schema = mongoose.Schema;

const partySchema = new Schema({
  childName: String,
  parentName: String,
  number: String,
  dairy: Boolean,
  nuts: Boolean,
  confirmed: Boolean,
  declined: Boolean,
});
const Party = mongoose.model('party', partySchema);

module.exports = Party;
