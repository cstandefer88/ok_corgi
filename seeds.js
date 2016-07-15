require('dotenv').config();

var mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONN_OK_CORGI);

var Corgi = require('./models/corgi');

Corgi.create(
  {
    name: "Zoe",
    image_url: "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s306x306/e15/10899304_1426072301036564_994441959_n.jpg",
    interests: "barking",
    age: 5,
    liked: false
  },
  {
    name: "Zephyr",
    image_url: "https://pbs.twimg.com/profile_images/378800000674268962/06ce58cab26c3a0daf80cf57e5acb29b.jpeg",
    interests: "sleeping",
    age: 4,
    liked: false
  },
  {
    name: "Armikon",
    image_url: "http://barkpost.com/wp-content/uploads/2014/05/BZtScGVCEAEGss3.jpg",
    interests: "sitting on laps",
    age: 3,
    liked: false
  },
  function(err, corgis) {
    console.log("Corgis created");
    mongoose.connection.close();
  }
);
