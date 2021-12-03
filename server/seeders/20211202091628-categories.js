'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      id: 1,
      name: 'Смартфоны',
      desc: 'Смартфоны',
      parent: 0,
      slug: 'smartphones',
      icon: 'smartphone',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      name: 'Ноутбуки',
      desc: 'Ноутбуки',
      parent: 0,
      slug: 'notebooks',
      icon: 'laptop',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', [{
      id: [1, 2]
    }])
  }
};
