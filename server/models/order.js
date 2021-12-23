module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        userId: DataTypes.INTEGER,
        products: DataTypes.JSONB,
    });

    return Order;
};