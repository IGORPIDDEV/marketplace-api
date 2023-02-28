module.exports = (sequelize, DataTypes) => {
    const ProductProperty = sequelize.define('ProductProperty', {
        productId: DataTypes.INTEGER,
        filterId: DataTypes.INTEGER,
        filterPropertyId: DataTypes.INTEGER
    });

    ProductProperty.associate = (models) => {
        ProductProperty.belongsTo(models.Filter, {
            foreignKey: 'filterId',
            as: 'filter',
            onDelete: 'CASCADE'
        });
        ProductProperty.belongsTo(models.FilterProperty, {
            foreignKey: 'filterPropertyId',
            as: 'filterProperty',
            onDelete: 'CASCADE'
        });
    };

    return ProductProperty;
};