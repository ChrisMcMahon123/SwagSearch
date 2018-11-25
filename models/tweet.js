'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    city: DataTypes.STRING,
    hash: DataTypes.STRING
  }, {
    tableName: 'Tweets',
    timestamps: true
  });
  Tweet.associate = function(models) {
    // associations can be defined here
  };
  return Tweet;
};