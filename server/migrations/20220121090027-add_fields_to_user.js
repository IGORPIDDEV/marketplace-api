'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
          'Users',
          'phone',
          {
            type: Sequelize.STRING
          }
      ),
      queryInterface.addColumn(
          'Users',
          'data',
          {
            type: Sequelize.JSON
          }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'phone'),
      queryInterface.removeColumn('Users', 'data')
    ]);
  }
};


