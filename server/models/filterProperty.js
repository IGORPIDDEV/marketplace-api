module.exports = (sequelize, DataTypes) => {
    const FilterProperty = sequelize.define('FilterProperty', {
        name: DataTypes.STRING,
        categoryId: DataTypes.INTEGER,
        filterId: DataTypes.INTEGER
    });
    return FilterProperty;
};