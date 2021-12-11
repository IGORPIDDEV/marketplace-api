'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        id: 1,
        name: 'iPhone 12 Pro Max',
        desc: 'Phone 12 Pro Max 512Gb',
        image: 'iphone12promax.jpg',
        slug: 'iphone-12-pro-max',
        price: '1000.00',
        quantity: '99',
        brandId: 1,
        sales: 1,
        views: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 1,
        statusId: 1,
        unitId: 1
    }, {
        id: 2,
        name: 'Samsung Galaxy Note 10',
        desc: 'Samsung Galaxy Note 10 128Gb',
        image: 'galaxynote10.jpg',
        slug: 'samsung-galaxy-note-10-128-gb',
        price: '800.00',
        quantity: '49',
        brandId: 2,
        sales: 6,
        views: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 1,
        statusId: 1,
        unitId: 1
    }, {
        id: 3,
        name: 'Asus Vivobook 15',
        desc: 'Asus Vivobook 15 K513E',
        image: 'asusvivobook15.jpeg',
        slug: 'asus-vivobook-15-k513e',
        price: '950.00',
        quantity: '15',
        brandId: 4,
        sales: 2,
        views: 33,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 2,
        statusId: 1,
        unitId: 1
    }, {
        id: 4,
        name: 'Lenovo Thinkpad D35',
        desc: 'Lenovo Thinkpad D35',
        image: 'lenovothinkpad.jpeg',
        slug: 'lenovo-thinkpad-d35',
        price: '1050.00',
        quantity: '12',
        brandId: 3,
        sales: 5,
        views: 149,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 2,
        statusId: 1,
        unitId: 1
    }, {
        id: 5,
        name: 'iPhone 11 Pro Max',
        desc: 'Phone 11 Pro Max 512Gb',
        image: 'iphone11promax.jpg',
        slug: 'iphone-11-pro-max',
        price: '999.00',
        quantity: '99',
        brandId: 1,
        sales: 4,
        views: 36,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 1,
        statusId: 1,
        unitId: 1
    }, {
        id: 6,
        name: 'Samsung Galaxy M52 6/128Gb',
        desc: 'Samsung Galaxy M52 6/128Gb',
        image: 'samsunggalaxym52.jpg',
        slug: 'samsung-galaxy-m52',
        price: '500.00',
        quantity: '39',
        brandId: 2,
        sales: 1,
        views: 41,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 1,
        statusId: 1,
        unitId: 1
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', [{
        id: [1, 2, 3, 4, 5, 6]
    }])
  }
};
