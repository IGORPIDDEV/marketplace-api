'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FilterProperties', [{
      id: 1,
      name: 'Up to 2999 mAh',
      categoryId: 1,
      filterId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      name: '2999 to 3999 mAh',
      categoryId: 1,
      filterId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 3,
      name: '3999 to 4999 mAh',
      categoryId: 1,
      filterId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 4,
      name: '5000 mAh',
      categoryId: 1,
      filterId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 5,
      name: '1600x720',
      categoryId: 1,
      filterId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 6,
      name: '2208x1768',
      categoryId: 1,
      filterId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 7,
      name: '2400x1080',
      categoryId: 1,
      filterId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 8,
      name: '2640x1080',
      categoryId: 1,
      filterId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 9,
      name: '3200x1440',
      categoryId: 1,
      filterId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 10,
      name: '3800x1940',
      categoryId: 1,
      filterId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 11,
      name: '13"',
      categoryId: 2,
      filterId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      id: 12,
      name: '14"',
      categoryId: 2,
      filterId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 13,
      name: '15"',
      categoryId: 2,
      filterId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 14,
      name: '16"',
      categoryId: 2,
      filterId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 15,
      name: '18"',
      categoryId: 2,
      filterId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 16,
      name: '4 Gb',
      categoryId: 2,
      filterId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 17,
      name: '8 Gb',
      categoryId: 2,
      filterId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 18,
      name: '16 Gb',
      categoryId: 2,
      filterId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 19,
      name: '24 Gb',
      categoryId: 2,
      filterId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 20,
      name: '32Gb',
      categoryId: 2,
      filterId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 21,
      name: '64 Gb',
      categoryId: 2,
      filterId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FilterProperties', [{
      id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    }])
  }
};
