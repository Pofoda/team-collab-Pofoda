const mysql = require('../config/mysql');

module.exports = (app) => {

    app.get('/', async (req, res, next) => {
       

        
        res.render('home.ejs', {
            "title": "shopping"
        });
    });

};