module.exports = (sequelize, DataTypes) => {
    const Favorite = sequelize.define('Favorite', {
        productId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
    });

    return Favorite;
};