Meteor.publish('nationaldb', function () {
    return NationalDaysDB.find({}, {sort: {date: -1}});
});