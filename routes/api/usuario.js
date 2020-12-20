const routerx = require('express-promise-router');
const userController = require('../../controllers/UsuarioController.js');

const router = routerx();

// Route Api - User 
router.get('/list', /*auth.verificarVendedor,*/ userController.list);

// Route Api - User - add 
router.post('/add', /*auth.verificarAdministrador,*/ userController.add);

// Route Api - User - update 
router.put('/update', userController.update);

// Route Api - User - activate 
router.put('/activate', userController.activate);

// Route Api - User - activate 
router.put('/deactivate', userController.deactivate);

// Route Api - User - Signin 
router.post('/login', userController.login);


module.exports = router;