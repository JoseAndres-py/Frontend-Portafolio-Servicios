const models = require('../models');
const bcrypt = require('bcryptjs');

exports.register = async(req, res) => {

    req.body.password = await bcrypt.hashSync(req.body.password, 10);
    req.body.createdAt = new Date(),
    req.body.updatedAt= new Date()
    
    try {
        const user = await models.user.create(req.body);
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({
            message: 'Error in register user'
        });
    }
}

exports.listUsers = async(req, res) => {
    try {
        const user = await models.user.findAll(); 
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({
            message: 'Error get users'
        });
    }
    
}