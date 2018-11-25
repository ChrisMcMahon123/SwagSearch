'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   queryInterface.addColumn('Tweets', 'count', {type: 'integer'})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
