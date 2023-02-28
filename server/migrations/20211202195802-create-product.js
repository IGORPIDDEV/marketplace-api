'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            desc: {
                type: Sequelize.TEXT
            },
            image: {
                type: Sequelize.STRING
            },
            slug: {
                type: Sequelize.STRING,
                allowNull: false
            },
            sales: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            views: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            price: {
                type: Sequelize.DECIMAL(12, 2),
                defaultValue: 0.00
            },
            quantity: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            unitId: {
                type: Sequelize.INTEGER,
                defaultValue: 1
            },
            statusId: {
                type: Sequelize.INTEGER,
                defaultValue: 1
            },
            categoryId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            brandId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Products');
    }
};