'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      id: 1,
      userId: 2,
      statusId: 4,
      products: `[
      {
        "id": 1,
        "name": "Samsung Galaxy M52 6/128Gb",
        "image": "samsunggalaxym52.jpg",
        "price": "500.00",
        "quantity": 1,
        "productId": 6,
        "properties": [
          {
            "id": 2,
            "filter": {
              "id": 2,
              "name": "Screen resolution",
              "createdAt": "2022-01-21T13:56:38.812Z",
              "updatedAt": "2022-01-21T13:56:38.812Z",
              "categoryId": 1
            },
            "filterId": 2,
            "createdAt": "2022-01-21T13:56:38.821Z",
            "productId": 6,
            "updatedAt": "2022-01-21T13:56:38.821Z",
            "filterProperty": {
              "id": 8,
              "name": "2640x1080",
              "filterId": 2,
              "createdAt": "2022-01-21T13:56:38.817Z",
              "updatedAt": "2022-01-21T13:56:38.817Z",
              "categoryId": 1
            },
            "filterPropertyId": 8
          }
        ],
        "totalPrice": "500.00"
      },
      {
        "id": 2,
        "name": "Samsung Galaxy Note 10",
        "image": "galaxynote10.jpg",
        "price": "800.00",
        "quantity": 1,
        "productId": 2,
        "properties": [
          {
            "id": 3,
            "filter": {
              "id": 2,
              "name": "Screen resolution",
              "createdAt": "2022-01-21T13:56:38.812Z",
              "updatedAt": "2022-01-21T13:56:38.812Z",
              "categoryId": 1
            },
            "filterId": 2,
            "createdAt": "2022-01-21T13:56:38.821Z",
            "productId": 2,
            "updatedAt": "2022-01-21T13:56:38.821Z",
            "filterProperty": {
              "id": 10,
              "name": "3800x1940",
              "filterId": 2,
              "createdAt": "2022-01-21T13:56:38.817Z",
              "updatedAt": "2022-01-21T13:56:38.817Z",
              "categoryId": 1
            },
            "filterPropertyId": 10
          },
          {
            "id": 1,
            "filter": {
              "id": 1,
              "name": "Battery capacity",
              "createdAt": "2022-01-21T13:56:38.812Z",
              "updatedAt": "2022-01-21T13:56:38.812Z",
              "categoryId": 1
            },
            "filterId": 1,
            "createdAt": "2022-01-21T13:56:38.821Z",
            "productId": 2,
            "updatedAt": "2022-01-21T13:56:38.821Z",
            "filterProperty": {
              "id": 3,
              "name": "От 3999 до 4999 мАч",
              "filterId": 1,
              "createdAt": "2022-01-21T13:56:38.817Z",
              "updatedAt": "2022-01-21T13:56:38.817Z",
              "categoryId": 1
            },
            "filterPropertyId": 3
          }
        ],
        "totalPrice": "800.00"
      }
    ]`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      userId: 2,
      statusId: 5,
      products: `[
      {
        "id": 1,
        "name": "Samsung Galaxy M52 6/128Gb",
        "image": "samsunggalaxym52.jpg",
        "price": "500.00",
        "quantity": 1,
        "productId": 6,
        "properties": [
          {
            "id": 2,
            "filter": {
              "id": 2,
              "name": "Screen resolution",
              "createdAt": "2022-01-21T13:56:38.812Z",
              "updatedAt": "2022-01-21T13:56:38.812Z",
              "categoryId": 1
            },
            "filterId": 2,
            "createdAt": "2022-01-21T13:56:38.821Z",
            "productId": 6,
            "updatedAt": "2022-01-21T13:56:38.821Z",
            "filterProperty": {
              "id": 8,
              "name": "2640x1080",
              "filterId": 2,
              "createdAt": "2022-01-21T13:56:38.817Z",
              "updatedAt": "2022-01-21T13:56:38.817Z",
              "categoryId": 1
            },
            "filterPropertyId": 8
          }
        ],
        "totalPrice": "500.00"
      }
    ]`,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', [{
      id: [1, 2]
    }])
  }
};
