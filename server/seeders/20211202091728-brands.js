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
            name: 'Lenovo',
            desc: 'Lenovo',
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            id: 3,
            name: 'Samsung',
            desc: 'Samsung',
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            id: 4,
            name: 'Xiaomi',
            desc: 'Xiaomi',
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            id: 5,
            name: 'Lenovo',
            desc: 'Lenovo',
            categoryId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            id: 6,
            name: 'Asus',
            desc: 'Asus',
            categoryId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            id: 7,
            name: 'HP',
            desc: 'HP',
            categoryId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            id: 8,
            name: 'Apple',
            desc: 'Apple',
            categoryId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            id: 9,
            name: 'Acer',
            desc: 'Acer',
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Brands', [{
            id: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }])
    }
};
