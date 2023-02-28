'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Brands', [{
            id: 1,
            name: 'Apple',
            desc: 'Apple',
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            id: 2,
            name: 'Samsung',
            desc: 'Samsung',
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            id: 3,
            name: 'Lenovo',
            desc: 'Lenovo',
            categoryId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            id: 4,
            name: 'Asus',
            desc: 'Asus',
            categoryId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Brands', [{
            id: [1, 2, 3, 4]
        }])
    }
};
