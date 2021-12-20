module.exports = (sequelize, DataTypes) => {
    const Favorite = sequelize.define('Favorite', {
        productId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        /*image: DataTypes.STRING,
        slug: DataTypes.STRING,
        price: DataTypes.DECIMAL(12, 2),
        quantity: DataTypes.INTEGER,
        sales: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        views: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },*/
    });

    /*    Favorite.associate = (models) => {
            Favorite.belongsTo(models.Product, {
                foreignKey: 'productId',
                as: 'product',
                onDelete: 'CASCADE'
            });
            Favorite.belongsTo(models.User, {
                foreignKey: 'unitId',
                as: 'unit',
                onDelete: 'CASCADE'
            });
            Favorite.belongsTo(models.Status, {
                foreignKey: 'statusId',
                as: 'status',
                onDelete: 'CASCADE'
            });
        };*/

    return Favorite;
};