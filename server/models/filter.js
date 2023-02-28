module.exports = (sequelize, DataTypes) => {
    const Filter = sequelize.define('Filter', {
        name: DataTypes.STRING,
        categoryId: DataTypes.INTEGER,
    });

    Filter.associate = (models) => {
        Filter.belongsTo(models.Category, {
            foreignKey: 'categoryId',
            as: 'category',
            onDelete: 'CASCADE'
        });
        Filter.hasMany(models.FilterProperty, {
            foreignKey: 'filterId',
            as: 'properties',
            onDelete: 'CASCADE'
        });
    };

    return Filter;
};