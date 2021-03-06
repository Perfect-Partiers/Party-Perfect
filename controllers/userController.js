const db = require("../models");

// Defining methods for the UserController
module.exports = {
  findAllUsers: (req, res) => {
    db.User.find({})
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findUserById: (req, res) => {
    db.User.find({ uid: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createUser: (req, res) => {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateUser: (req, res) => {
    let updates = req.body;
    db.User.findOneAndUpdate({ uid: req.params.id }, ...updates)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeUser: (req, res) => {
    db.User.find({ uid: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  checkUser: (req, res) => {
    db.User.find({ uid: req.params.id }, { _id: 1 })
      .limit(1)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
