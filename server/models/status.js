module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define('Status', {
        name: DataTypes.STRING,
        desc: DataTypes.STRING,
        color: DataTypes.STRING
    });

    return Status;
};