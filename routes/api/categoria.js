const routerx = require('express-promise-router');
const categoriaController = require('../../controllers/CategoriaController.js');

const router = routerx();

// Route Api - categoria - list 
router.get('/list', categoriaController.list);

// Route Api - categoria - add 
router.post('/add', categoriaController.add);

// Route Api - categoria - update 
router.put('/update', categoriaController.update);

// Route Api - categoria - activate 
router.put('/activate', categoriaController.activate);

// Route Api - categoria - activate 
router.put('/deactivate', categoriaController.deactivate);


module.exports = router;