const routerx = require('express-promise-router');
const articuloController = require('../../controllers/ArticuloController.js');

const router = routerx();

// Route Api - articulo - list 
router.get('/list', articuloController.list);

// Route Api - articulo - add 
router.post('/add', articuloController.add);

// Route Api - articulo - update 
router.put('/update', articuloController.update);

// Route Api - articulo - activate 
router.put('/activate', articuloController.activate);

// Route Api - articulo - deactivate 
router.put('/deactivate', articuloController.deactivate);



module.exports = router;