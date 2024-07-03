const mainPage = require('./main');

const constructorMethod = (app) => {
    app.use('/', mainPage);
    app.use("*", (req, res) => {
        res.status(404).render('site/error', {class: 'error', message: 'Page not found'});
    });
};

module.exports = constructorMethod;