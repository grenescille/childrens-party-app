const mongoose = require('../party-db');
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  invitation: Boolean,
  partyLength: Number,
  hireVenue: Boolean,
  hireEntertainer: Boolean,
  hirePa: Boolean,
  partyBags: Boolean,
  birthdayBanner: Boolean,
  partyGames: Number,
  cake: Boolean,
});

const Budget = mongoose.model('budget', budgetSchema);

module.exports = Budget;
