const mongoose = require("mongoose");
const db = require("../models");

// This file empties the parties collection and inserts the parties below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/partyperfect");

const englishBulldog =
  "https://images.unsplash.com/photo-1522429143291-e47cb0e3a596?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80";

const partySeed = [
  {
    name: "Someone's Birthday Party!",
    date: "1/26/2022",
    time: "3:00 P.M.",
    address: { street: "8498 Seaview Pl NW, Seattle, WA", zip: "98117" },
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
    creator: "Seed Creator seedDB.js",
    schedule: [
      { time: "4:00 P.M.", activity: "Play first game!" },
      { time: "5:00 P.M.", activity: "Eat!" },
      { time: "6:00 P.M.", activity: "Play second game!" },
      { time: "7:00 P.M.", activity: "Open presents!" },
    ],
    image: englishBulldog,
  },
  {
    name: "Mardi Gras Dinner!",
    date: "3/1/2022",
    time: "6:00 P.M.",
    address: { street: "400 Broad St, Seattle, WA", zip: "98109" },
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
    image: englishBulldog,
  },
  {
    name: "Spring Celebration",
    date: "4/23/2022",
    time: "12:00 P.M.",
    address: { street: "5335 NE 4th St #1, Renton, WA", zip: "98059" },
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
    image: englishBulldog,
  },
  {
    name: "Fun at the Waterfront!",
    date: "7/1/2022",
    time: "12:00 P.M.",
    address: { street: "1401 Alaskan Way, Seattle, WA", zip: "98101" },
    attendees: [
      { name: "Bob", email: "bob@test.com" },
      { name: "Joe", email: "joe@test.com" },
      { name: "Jack", email: "jack@test.com" },
      { name: "And", email: "and@test.com" },
      { name: "Jill", email: "jill@test.com" },
      { name: "Valerie", email: "valerie@test.com" },
    ],
    supplies: [
      { supply: "cups" },
      { supply: "drinks" },
      { supply: "chocolate chip cookies" },
      { supply: "chicken" },
      { supply: "veggies" },
    ],
    schedule: [
      { time: "12:10 P.M.", activity: "Eat lunch!" },
      { time: "1:30 P.M.", activity: "Take boat tour!" },
      { time: "4:00 P.M.", activity: "Ride Seattle Great Wheel" },
      { time: "5:00 P.M.", activity: "Museum!" },
      { time: "7:30 P.M.", activity: "Dinner!" },
    ],
    image: englishBulldog,
  },
  {
    name: "Mariners Game!",
    date: "10/8/2022",
    time: "7:00 P.M.",
    address: { street: "1250 1st Ave S, Seattle, WA", zip: "98134" },
    attendees: [
      { name: "Nancy", email: "nancy@test.com" },
      { name: "Lolo", email: "lolo@test.com" },
      { name: "Herbert", email: "herbert@test.com" },
      { name: "George", email: "george@test.com" },
      { name: "Nathan", email: "nathan@test.com" },
      { name: "Charlie", email: "charlie@test.com" },
    ],
    supplies: [
      { supply: "ponchos" },
      { supply: "tickets" },
      { supply: "hand warmers" },
      { supply: "scarves" },
      { supply: "gloves" },
    ],
    schedule: [
      { time: "5:00 P.M.", activity: "Eat a light dinner!" },
      { time: "6:00 P.M.", activity: "Pre-funk at Pyramid!" },
      { time: "6:50 P.M.", activity: "Walk to stadium!" },
      { time: "7:10 P.M.", activity: "Game time!" },
      { time: "10:00 P.M.", activity: "More drinks!" },
    ],
    image: englishBulldog,
  },
  {
    name: "Seahawks Game!",
    date: "10/3/2022",
    time: "1:00 P.M.",
    address: { street: "800 Occidental Ave S, Seattle, WA", zip: "98134" },
    attendees: [
      { name: "Nancy", email: "nancy@test.com" },
      { name: "Lolo", email: "lolo@test.com" },
      { name: "Herbert", email: "herbert@test.com" },
      { name: "George", email: "george@test.com" },
      { name: "Nathan", email: "nathan@test.com" },
      { name: "Charlie", email: "charlie@test.com" },
    ],
    supplies: [
      { supply: "ponchos" },
      { supply: "tickets" },
      { supply: "hand warmers" },
      { supply: "scarves" },
      { supply: "gloves" },
    ],
    schedule: [
      { time: "11:10 P.M.", activity: "Eat lunch!" },
      { time: "12:10 P.M.", activity: "Pre-funk at Pyramid!" },
      { time: "1:00 P.M.", activity: "Walk to stadium!" },
      { time: "5:00 P.M.", activity: "Dinner!" },
      { time: "7:30 P.M.", activity: "More drinks!" },
    ],
    image: englishBulldog,
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
