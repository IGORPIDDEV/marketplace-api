module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define('Brand', {
        name: DataTypes.STRING,
        desc: DataTypes.STRING,
        categoryId: DataTypes.INTEGER
    });
    return Brand;
};