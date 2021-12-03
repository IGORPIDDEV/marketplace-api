'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.addColumn(
            'Products',
            'categoryId',
            {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        )
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Products',
            'categoryId'
        );
    }
};
