const { Sequelize } = require(".");

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
        Product.belongsTo(models.Brand, {
            foreignKey: 'brandId',
            as: 'brand',
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
        Product.hasOne(models.Favorite, {
            foreignKey: 'productId',
            as: 'favorite',
            onDelete: 'CASCADE'
        });
        Product.hasMany(models.Review, {
            foreignKey: 'productId',
            as: 'reviews',
            onDelete: 'CASCADE'
        });
        Product.hasMany(models.ProductProperty, {
            foreignKey: 'productId',
            as: 'properties',
            onDelete: 'CASCADE'
        });
    };

    Product.get = async (slug) => {
        let product = await Product.findOne({
            where: {
                slug
            },
            include: [{
                all: true,
            }, {
                model: sequelize.models.Review,
                as: 'reviews',
                include: {
                    model: sequelize.models.User,
                    as: 'user'
                }
            }, {
                model: sequelize.models.ProductProperty,
                as: 'properties',
                include: [{
                    model: sequelize.models.Filter,
                    as: 'filter'
                }, {
                    model: sequelize.models.FilterProperty,
                    as: 'filterProperty'
                }]
            }]
        })
        return product
    }

    Product.getProductsByCategory = async (body, params, filtersData) => {
		let whereCondition = `p."categoryId" = ${params.categoryId}`
        if (parseInt(body.statusId)) {
			whereCondition += ` AND p."statusId" != ${parseInt(body.statusId)}`
        }
        if (body.brandId) {
			whereCondition += ` AND p."brandId" = ${body.brandId}`
        }
		
		let filteredProducts = []
		if (filtersData && filtersData.length) {
			let str = `WHERE`
            let filters = filtersData
			let filterKeys = Object.keys(filters)
			let filterLength = filters.filter(n => n && n.length).length
			filterKeys.forEach((filterKey) => {
				if (filters[filterKey] && filters[filterKey].length) {
					filters[filterKey].forEach((filterProperty) => {
						let operator = (str.length < 6) ? `` : ` OR`
						str += `${operator} (pp."filterId" = ${filterKey} AND pp."filterPropertyId" = ${filterProperty})`		
					})
				}
			})
			if (str.length > 6) {
				filteredProducts = await sequelize.query(
					`SELECT p.id, p.name FROM "Products" p
					FULL JOIN "ProductProperties" pp on pp."productId" = p.id
					${str}
					GROUP BY p.id
					HAVING count(*)=${filterLength}
		
					`, { type: sequelize.QueryTypes.SELECT }
				);
				return filteredProducts
			}
        }
        return null
    }
    return Product;
};