const routerx = require('express-promise-router');
const apiRouterUser = require('./api/usuario');
const apiRouterCategoria = require('./api/categoria');
const apiRouterArticulo = require('./api/articulo');



const router = routerx();

router.use('/usuario', apiRouterUser);

router.use('/categoria', apiRouterCategoria);

router.use('/articulo', apiRouterArticulo);

module.exports = router;