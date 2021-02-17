const db = require("../models");
const axios = require("axios");
// import axios from "axios"; // this doesn't work here
require("dotenv").config();
const BASEURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

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
            MAPBOX_TOKEN
        )
      )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
