// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by national-day.js.
import { name as packageName } from "meteor/national-day";

// Write your tests here!
// Here is an example.
Tinytest.add('national-day - example', function (test) {
  test.equal(packageName, "national-day");
});
