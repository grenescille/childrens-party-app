const Party = require('../models/partymodel');
const Budget = require('../models/budgetmodel');

exports.getAllChildren = async (req, res) => {
  try {
    const allChildren = await Party.find();
    res.send(allChildren);
    res.status(200);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

exports.addChild = async (req, res) => {
  try {
    req.body = await Party.create(req.body);
    res.send(req.body);
    res.status(200);
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
};

exports.addBudget = async (req, res) => {
  try {
    req.body = await Budget.create(req.body);
    res.send(req.body);
    res.status(200);
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
};

exports.fetchBudget = async (req, res) => {
  try {
    const budget = await Budget.find();
    res.send(budget);
    res.status(200);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

exports.getConfirmedChildren = async (req, res) => {
  try {
    const allChildren = await Party.find();
    const confirmed = allChildren.flatMap((child) =>
      child.confirmed ? child : []
    );
    res.send(confirmed);
    res.status(200);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

exports.getDeclinedChildren = async (req, res) => {
  try {
    const allChildren = await Party.find();
    const declined = allChildren.flatMap((child) =>
      child.declined ? child : []
    );
    res.send(declined);
    res.status(200);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

exports.getUnconfirmedChildren = async (req, res) => {
  try {
    const allChildren = await Party.find();
    const unconfirmed = allChildren.flatMap((child) =>
      !child.declined && !child.confirmed ? child : []
    );
    res.send(unconfirmed);
    res.status(200);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

exports.getNoNuts = async (req, res) => {
  try {
    const allChildren = await Party.find();
    const noNuts = allChildren.flatMap((child) => (!child.nuts ? child : []));
    res.send(noNuts);
    res.status(200);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

exports.getNoDairy = async (req, res) => {
  try {
    const allChildren = await Party.find();
    const noDairy = allChildren.flatMap((child) => (!child.dairy ? child : []));
    res.send(noDairy);
    res.status(200);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

exports.noNutsOrDairy = async (req, res) => {
  try {
    const allChildren = await Party.find();
    const allAllergies = allChildren.flatMap((child) =>
      !child.dairy || !child.nuts ? child : []
    );
    res.send(allAllergies);
    res.status(200);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

exports.deleteChildren = async (req, res) => {
  try {
    await Party.deleteMany();
    res.status(204).send();
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};
