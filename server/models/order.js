module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        userId: DataTypes.INTEGER,
        statusId: DataTypes.INTEGER,
        products: DataTypes.JSONB,
    });

    Order.associate = (models) => {
        Order.belongsTo(models.Status, {
            foreignKey: 'statusId',
            as: 'status',
            onDelete: 'CASCADE'
        });
    };

    return Order;
};