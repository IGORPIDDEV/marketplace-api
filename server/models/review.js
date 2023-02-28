module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        productId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        rate: DataTypes.INTEGER,
        text: DataTypes.STRING
    });

    Review.associate = (models) => {
        Review.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
            onDelete: 'CASCADE'
        });
    };

    return Review;
};