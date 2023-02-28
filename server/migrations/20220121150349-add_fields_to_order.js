'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
          'Orders',
          'statusId',
          {
            type: Sequelize.INTEGER
          }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Orders', 'statusId')
    ]);
  }
};


