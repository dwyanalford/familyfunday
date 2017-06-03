// creating the Table called "Event" in database with columns
// from the create event form
// note that sequelize will pluralize the database name
// from "Event" to "Events"
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "All",
    }
  });
  return Event;
};