'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      queryInterface.addConstraint('Tweets',['id_str'],{
        type: 'unique',
        allownull: false
      })
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
