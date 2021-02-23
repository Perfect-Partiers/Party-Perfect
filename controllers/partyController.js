const db = require("../models");
const axios = require("axios");
// import axios from "axios"; // this doesn't work here
require("dotenv").config();
const BASEURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_CONTROLLER_TOKEN;

// Defining methods for the partyController
module.exports = {
  findAllParties: (req, res) => {
    console.log("====partyController.findAllParties====");
    db.User.findOne({ uid: req.params.id })
      .populate(
        "parties",
        "_id name date creator time address attendees supplies schedule",
        null,
        { sort: { date: 1 } }
      )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findPartyById: (req, res) => {
    console.log("====partyController.findPartyById====");
    db.Party.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createParty: (req, res) => {
    console.log(req.body);
    let firebaseUid = req.params.id;
    db.Party.create(req.body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          { uid: firebaseUid },
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
  saveParty: (req, res) => {
    console.log("====partyController.saveParty====");
    let partyId = req.params.id;
    let firebaseUid = req.params.uid;
    db.User.findOneAndUpdate(
      { uid: firebaseUid },
      {
        $addToSet: {
          parties: partyId,
        },
      },
      {
        new: true,
      }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateParty: (req, res) => {
    console.log("====partyController.updateParty====");
    let updates = req.body;
    let itemKey = Object.keys(req.body)[0];
    let itemId = req.body[itemKey][0]._id;
    if (itemId === undefined) {
      db.Party.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: {
            ...updates,
          },
        },
        {
          new: true,
        }
      )
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    } else {
      db.Party.findOneAndUpdate(
        { _id: req.params.id },
        {
          $pull: {
            [itemKey]: { _id: itemId },
          },
        }
      )
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    }
  },
  removeParty: (req, res) => {
    console.log("====partyController.removeParty====");
    let partyId = req.params.id;
    let firebaseUid = req.params.uid;
    db.Party.findById({ _id: partyId })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) =>
        db.User.findOneAndUpdate(
          { uid: firebaseUid },
          {
            $pull: {
              parties: partyId,
            },
          }
        ).then(res.json(dbModel))
      )
      .catch((err) => res.status(422).json(err));
  },
  getMapBoxData: (req, res) => {
    console.log("====partyController.getMapBoxData====");
    db.Party.findById({ _id: req.params.id })
      .then(({ address }) => {
        axios
          .get(
            BASEURL +
              encodeURI(address.street) +
              "%20" +
              encodeURI(address.zip) +
              ".json?access_token=" +
              MAPBOX_TOKEN
          )
          .then((results) => {
            res.json(results.data);
          });
      })
      .catch((err) => res.status(422).json(err));
  },
};
