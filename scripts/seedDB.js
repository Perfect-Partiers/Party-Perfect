const mongoose = require("mongoose");
const db = require("../models");

// This file empties the parties collection and inserts the parties below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/partyperfect");

const partySeed = [
  {
    name: "Someone's Birthday Party!",
    date: "1/26/2022",
    time: "3:00 P.M.",
    address: "1234 Party Lane",
    attendees: [
      { name: "Josh", email: "josh@test.com" },
      { name: "Nancy", email: "nancy@test.com" },
      { name: "Roger", email: "roger@test.com" },
      { name: "Nicky", email: "nicky@test.com" },
    ],
    supplies: [
      { supply: "cups" },
      { supply: "drinks" },
      { supply: "dessert" },
      { supply: "protein" },
      { supply: "veggies" },
    ],
    schedule: [
      { time: "4:00 P.M.", activity: "Play first game!" },
      { time: "5:00 P.M.", activity: "Eat!" },
      { time: "6:00 P.M.", activity: "Play second game!" },
      { time: "7:00 P.M.", activity: "Open presents!" },
    ],
  },
  {
    name: "Mardi Gras Dinner!",
    date: "3/1/2022",
    time: "6:00 P.M.",
    address: "1234 Mardi Gras",
    attendees: [
      { name: "Lacey", email: "lacey@test.com" },
      { name: "Jacky", email: "Jacky@test.com" },
      { name: "Ricky", email: "Ricky@test.com" },
      { name: "Bob", email: "Bob@test.com" },
    ],
    supplies: [
      { supply: "cups" },
      { supply: "drinks" },
      { supply: "dessert" },
      { supply: "protein" },
      { supply: "veggies" },
    ],
    schedule: [
      { time: "6:30 P.M.", activity: "Eat!" },
      { time: "7:00 P.M.", activity: "Play first game!" },
      { time: "7:30 P.M.", activity: "Eat again!" },
      { time: "8:00 P.M.", activity: "Play second game!" },
    ],
  },
  {
    name: "Spring Celebration",
    date: "4/23/2022",
    time: "12:00 P.M.",
    address: "1234 Party Blvd",
    attendees: [
      { name: "Nick", email: "nick@test.com" },
      { name: "Sarah", email: "sarah@test.com" },
      { name: "Jill", email: "jill@test.com" },
      { name: "Paris", email: "Paris@test.com" },
      { name: "Barry", email: "barry@test.com" },
      { name: "Ron", email: "ron@test.com" },
      { name: "Frank", email: "frank@test.com" },
      { name: "Billy", email: "billy@test.com" },
    ],
    supplies: [
      { supply: "cups" },
      { supply: "drinks" },
      { supply: "dessert" },
      { supply: "protein" },
      { supply: "veggies" },
    ],
    schedule: [
      { time: "12:10 P.M.", activity: "Eat lunch!" },
      { time: "1:30 P.M.", activity: "Take tour bus!" },
      { time: "4:00 P.M.", activity: "Zip lining!" },
      { time: "5:00 P.M.", activity: "Museum!" },
      { time: "6:00 P.M.", activity: "Boat tour!" },
      { time: "7:30 P.M.", activity: "Dinner!" },
    ],
  },
];

db.Party.remove({})
  .then(() => db.Party.collection.insertMany(partySeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
