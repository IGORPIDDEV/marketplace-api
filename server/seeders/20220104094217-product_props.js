'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductProperties', [{
      id: 1,
      productId: 2,
      filterId: 1,
      filterPropertyId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      productId: 6,
      filterId: 2,
      filterPropertyId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 3,
      productId: 2,
      filterId: 2,
      filterPropertyId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 4,
      productId: 5,
      filterId: 2,
      filterPropertyId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 5,
      productId: 5,
      filterId: 1,
      filterPropertyId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 6,
      productId: 6,
      filterId: 2,
      filterPropertyId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 7,
      productId: 1,
      filterId: 1,
      filterPropertyId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 8,
      productId: 1,
      filterId: 2,
      filterPropertyId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 9,
      productId: 4,
      filterId: 3,
      filterPropertyId: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 10,
      productId: 3,
      filterId: 3,
      filterPropertyId: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 11,
      productId: 3,
      filterId: 4,
      filterPropertyId: 17,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 12,
      productId: 4,
      filterId: 4,
      filterPropertyId: 18,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 13,
      productId: 7,
      filterId: 3,
      filterPropertyId: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 14,
      productId: 7,
      filterId: 4,
      filterPropertyId: 18,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 15,
      productId: 8,
      filterId: 3,
      filterPropertyId: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 16,
      productId: 8,
      filterId: 4,
      filterPropertyId: 17,
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
  {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductProperties', [{
      id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 14, 15, 16]
    }])
  }
};
