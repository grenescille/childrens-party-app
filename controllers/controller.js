const Party = require('../models/model');

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

// var ids = things.reduce((ids, thing) => {
// if (thing.selected) {
// 	ids.push(thing.id);
// }
// return ids;
// }, []);

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
