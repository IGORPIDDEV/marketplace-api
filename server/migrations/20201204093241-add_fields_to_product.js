'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn(
                'Products',
                'price',
                {
                    type: Sequelize.DECIMAL(12, 2),
                    defaultValue: 0.00
                }
            ),
            queryInterface.addColumn(
                'Products',
                'quantity',
                {
                    type: Sequelize.INTEGER,
                    defaultValue: 0
                }
            ),
            queryInterface.addColumn(
                'Products',
                'unitId',
                {
                    type: Sequelize.INTEGER,
                    defaultValue: 1
                }
            ),
            queryInterface.addColumn(
                'Products',
                'statusId',
                {
                    type: Sequelize.INTEGER,
                    defaultValue: 1
                }
            )
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.removeColumn('Products', 'price'),
            queryInterface.removeColumn('Products', 'quantity'),
            queryInterface.removeColumn('Products', 'unitId'),
            queryInterface.removeColumn('Products', 'statusId')
        ]);
    }
};
