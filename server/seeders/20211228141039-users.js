'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 1,
      email: 'admin@gmail.com',
      password: '$2a$10$LXydCeKLh7OTNbWpAXBAoe3.4kd3M5YD4EjbTdmYipXLDq9gIrLF.',
      phone: '+380930000000',
      data: JSON.stringify({
        "firstName": "John",
        "surname": "Doe"
      }),
      token: null,
      lastLogin: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      email: 'user@gmail.com',
      password: '$2a$10$LXydCeKLh7OTNbWpAXBAoe3.4kd3M5YD4EjbTdmYipXLDq9gIrLF.',
      phone: '+380930000000',
      data: JSON.stringify({
        "firstName": "John",
        "surname": "Doe"
      }),
      token: null,
      lastLogin: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 3,
      email: 'user2@gmail.com',
      password: '$2a$10$LXydCeKLh7OTNbWpAXBAoe3.4kd3M5YD4EjbTdmYipXLDq9gIrLF.',
      phone: '+380930000000',
      data: JSON.stringify({
        "firstName": "John",
        "surname": "Doe"
      }),
      token: null,
      lastLogin: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [{
      id: [1, 2, 3]
    }])
  }
};
