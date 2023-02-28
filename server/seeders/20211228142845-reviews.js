'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      id: 1,
      userId: 2,
      productId: 2,
      rate: 4.5,
      text: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      userId: 2,
      productId: 3,
      rate: 5,
      text: 'good',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 3,
      userId: 3,
      productId: 2,
      rate: 2,
      text: 'bad',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', [{
      id: [1, 2, 3]
    }])
  }
};
