module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
        desc: DataTypes.STRING,
        parent: DataTypes.INTEGER,
        slug: DataTypes.STRING,
        icon: DataTypes.STRING
    });

    // Category.associate = (models) => {
    // Category.belongsTo(models.Product);
    // };
    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            foreignKey: 'categoryId',
            as: 'products',
        });
    };

    Category.get = async (slug) => {
        let category = await Category.findOne({
            where: {
                slug
            }
        })
        return category
    }

    Category.listAll = async () => {
        let categories = await Category.findAll({
            // group: ['Category.id', 'products.id'],
            // attributes: ['Category.*', 'products.*', [sequelize.fn('COUNT', sequelize.col('products.id')), 'productsCount']],
            group: ['Category.id', 'products.id'],
            attributes: {
                include: [[sequelize.fn("COUNT", sequelize.col("products.id")), "productsCount"]]
            },
            include: [{
                model: sequelize.models.Product, as: 'products', attributes: []
            }]
        })
        return categories
    }

    return Category;
};