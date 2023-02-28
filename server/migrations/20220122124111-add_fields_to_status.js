'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
          'Statuses',
          'type',
          {
            type: Sequelize.STRING
          }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Statuses', 'type')
    ]);
  }
};


