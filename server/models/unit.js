module.exports = (sequelize, DataTypes) => {
    const Unit = sequelize.define('Unit', {
        name: DataTypes.STRING,
        desc: DataTypes.STRING
    });

    return Unit;
};