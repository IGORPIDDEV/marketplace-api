'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Statuses', [{
      id: 1,
      name: 'В наличии',
      desc: 'В наличии',
      color: 'positive',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Statuses', [{
      id: [1]
    }])
  }
};
