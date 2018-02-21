'use strict';
module.exports = (sequelize, DataTypes) => {
  var Soccer = sequelize.define('Soccer', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Soccer.associate = function(models) {
    // associations can be defined here
  };
  return Soccer;
};
