'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Filters', [{
      id: 1,
      name: 'Battery capacity',
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Screen resolution',
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Screen diagonal',
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'RAM',
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Filters', [{
      id: [1, 2, 3, 4]
    }])
  }
};
