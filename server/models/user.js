module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        token: DataTypes.STRING,
        lastLogin: DataTypes.STRING,
        phone: DataTypes.STRING,
        data: DataTypes.JSON
    });

    return User;
};