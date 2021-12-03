'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn(
                'Categories',
                'icon',
                {
                    type: Sequelize.STRING
                }
            )
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.removeColumn('Categories', 'icon')
        ]);
    }
};
