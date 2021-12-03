module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        desc: DataTypes.TEXT,
        image: DataTypes.STRING,
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
        },
    });

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            foreignKey: 'categoryId',
            as: 'category',
            onDelete: 'CASCADE'
        });
        Product.belongsTo(models.Unit, {
            foreignKey: 'unitId',
            as: 'unit',
            onDelete: 'CASCADE'
        });
        Product.belongsTo(models.Status, {
            foreignKey: 'statusId',
            as: 'status',
            onDelete: 'CASCADE'
        });
    };

    Product.get = async (slug) => {
        let product = await Product.findOne({
            where: {
                slug
            }
        })
        return product
    }

    return Product;
};