'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Statuses', [{
      id: 1,
      name: 'In stock',
      desc: 'In stock',
      type: 'product',
      color: 'positive',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      name: 'Running out',
      desc: 'Running out',
      type: 'product',
      color: 'warning',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 3,
      name: 'Not available',
      desc: 'Not available',
      type: 'product',
      color: 'negative',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 4,
      name: 'New',
      desc: 'New',
      type: 'order',
      color: 'warning',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 5,
      name: 'In processing',
      desc: 'In processing',
      type: 'order',
      color: 'positive',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Statuses', [{
      id: [1, 2, 3, 4, 5]
    }])
  }
};
