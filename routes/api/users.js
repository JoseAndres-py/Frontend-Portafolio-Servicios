const router = require('express').Router();
const userController = require('../../controllers/UserController.js');
const magnamentController = require('../../controllers/managementController.js');
const auth = require('../../middlewares/auth.js');

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