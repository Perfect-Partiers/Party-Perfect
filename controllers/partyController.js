const db = require("../models");
import axios from "axios";
require("dotenv").config();
const BASEURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const API_KEY = process.env.REACT_APP_API_KEY;

// Defining methods for the partyController
module.exports = {
  findAllParties: (req, res) => {
    db.User.findOne({ uid: "req.params.id" })
      .populate("parties")
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findPartyById: (req, res) => {
    db.Party.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createParty: (req, res) => {
    db.Party.create(req.body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          { uid: req.params.id },
          {
            $push: {
              parties: _id,
            },
          },
          {
            new: true,
          }
        )
      )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateParty: (req, res) => {
    db.Party.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeParty: (req, res) => {
    db.Party.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  getMapBoxData: (req, res) => {
    db.Party.findById({ _id: req.params.id })
      .then(({ address }) =>
        axios.get(
          BASEURL +
            encodeURI(address.street) +
            encodeURI(address.zip) +
            ".json?access_token=" +
            API_KEY
        )
      )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
