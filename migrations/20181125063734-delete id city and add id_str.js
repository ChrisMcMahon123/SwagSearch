'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
  Promise.all([
    queryInterface.removeColumn("Tweets", "city"),
    queryInterface.removeColumn("Tweets","count"),
    queryInterface.addColumn("Tweets", "id_str", {type: Sequelize.STRING })
    
  ]),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
