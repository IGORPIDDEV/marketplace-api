'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.addColumn(
            'Products',
            'brandId',
            {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        )
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Products',
            'brandId'
        );
    }
};