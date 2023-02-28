const httpStatus = require('http-status');

exports.getMenu = async (req, res, next) => {
    try {
        let menu = `[{
            "_id": {
                "secondCategory": "Аналитика"
            },
            "pages": [
                {
                    "alias": "financial-analytics",
                    "title": "Курсы по финансовой аналитике",
                    "_id": "3248d2g5j84836y456uo343c",
                    "category": "Финансовая аналитика"
                }, {
                    "alias": "big-data",
                    "title": "Курсы по Big Data",
                    "_id": "32486kflk2flf2f2f23343c",
                    "category": "Big Data"
                }
            ]
        }, {
            "_id": {
                "secondCategory": "Бизнес"
            },
            "pages": [
                {
                    "alias": "financial-gramotnost",
                    "title": "Курсы по финансовой грамотности",
                    "_id": "3248d2g5j84836y456uo343c",
                    "category": "Финансовая грамотность"
                }
            ]
        }]`
        res.status(httpStatus.OK);
        res.json(JSON.parse(menu));
    } catch (error) {
        next(error);
    }
};