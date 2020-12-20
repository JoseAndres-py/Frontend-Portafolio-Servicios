const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenServices = require('../services/token');

exports.login = async(req, res, next) => {
    try {
        const user = await db.Usuario.findOne({where: {email: req.body.email}});
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if(passwordIsValid){
                const token = await tokenServices.encode(user.id, user.rol);
                res.status(200).send({
                    user: user,
                    tokenReturn: token,
                });
            }else{
                res.status(401).send({ auth: false, accessToken: null, reason:"Invalid Password!"});
                    
            }
        }else{
            res.status('404').send('User Not Found.');
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error -->'
        });
        next(error);
    }
}

exports.list = async(req, res, next) => {
    try {
        const user = await db.Usuario.findAll(); 
        if(user){
            res.status(200).json(user);
        }else{
            res.status(404).send({
                message: 'There is not user in the system'
            });
        }
        
    } catch (error) {
        res.status(500).json({
            message: 'Error get users'
        });
        next();
    }
    
}

exports.add = async(req, res, next) => {
    try {
        const user = await db.Usuario.findOne({where: {email: req.body.email}});
        if(user){
            res.status(409).send({
                message: 'Sorry your request has a conflict whit our system state, maybe the email exist'
            });
        }else{
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const user = await db.Usuario.create(req.body);
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error -->'
        });
        next(error);
    }
}

exports.update = async(req, res, next) => {
    try {
        const user = await db.Usuario.findOne({where: {email: req.body.email}});
        if(user){
            const user = await db.Usuario.update({name: req.body.name},
                {
                    where:{
                        email: req.body.email
                    }
                    //returning: true
                });
                res.status(200).json(user);
        }else{
            res.status(404).send({
                message: 'User not found'
            });
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error -->'
        });
        next(error);
    }
}

exports.activate = async(req, res, next) => {
    try {
        const usuario = await db.Usuario.findOne({where: {id: req.body.id}});
        if(usuario){
            const usuario = await db.Usuario.update({estado: 1},
                {
                    where:{
                        id: req.body.id
                    }
                    //returning: true
                });
                res.status(200).json(usuario);
        }else{
            res.status(404).send({
                message: 'User not found'
            });
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error -->'
        });
        next(error);
    }
}

exports.deactivate = async(req, res, next) => {
    try {
        const usuario = await db.Usuario.findOne({where: {id: req.body.id}});
        if(usuario){
            const usuario = await db.Usuario.update({estado: 0},
                {
                    where:{
                        id: req.body.id
                    }
                    //returning: true
                });
                res.status(200).json(usuario);
        }else{
            res.status(404).send({
                message: 'User not found'
            });
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error -->'
        });
        next(error);
    }
}