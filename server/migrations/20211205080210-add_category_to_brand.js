'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.addColumn(
            'Brands',
            'categoryId',
            {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        )
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Brands',
            'categoryId'
        );
    }
};
