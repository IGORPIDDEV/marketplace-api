'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      id: 1,
      name: 'Smartphones',
      desc: 'Smartphones',
      parent: 0,
      slug: 'smartphones',
      icon: 'smartphone',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      name: 'Notebooks',
      desc: 'Notebooks',
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
