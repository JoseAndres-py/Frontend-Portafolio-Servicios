const db = require('../models');

exports.list = async(req, res, next) => {
    try {
        const categorias = await db.Categoria.findAll(/*{where: {estado: 1}}*/); 
        if(categorias){
            res.status(200).json(categorias);
        }else{
            res.status(404).send({
                message: 'There is not category in the system'
            });
        }
        
    } catch (error) {
        res.status(500).json({
            message: 'Error!!'
        });
        next(error);
    }
    
}

exports.add = async(req, res, next) => {
    try {
        const categoria = await db.Categoria.findOne({where: {nombre: req.body.nombre}}); // Limpiar strings - Tildes Minisculas - Sin espacios
        if(categoria){
            res.status(409).send({
                message: 'Sorry your request has a conflict whit our system state, maybe the name exist'
            });
        }else{
            const categoria = await db.Categoria.create(req.body);
            res.status(200).json(categoria);
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
        const categoria = await db.Categoria.findOne({where: {id: req.body.id}});
        if(categoria){
            const categoria = await db.Categoria.update({nombre: req.body.nombre, descripcion: req.body.descripcion},
                {
                    where:{
                        id: req.body.id
                    }
                    //returning: true
                });
                res.status(200).json(categoria);
        }else{
            res.status(404).send({
                message: 'Category not found'
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
        const categoria = await db.Categoria.findOne({where: {id: req.body.id}});
        if(categoria){
            const categoria = await db.Categoria.update({estado: 1},
                {
                    where:{
                        id: req.body.id
                    }
                    //returning: true
                });
                res.status(200).json(categoria);
        }else{
            res.status(404).send({
                message: 'Category not found'
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
        const categoria = await db.Categoria.findOne({where: {id: req.body.id}});
        if(categoria){
            const categoria = await db.Categoria.update({estado: 0},
                {
                    where:{
                        id: req.body.id
                    }
                    //returning: true
                });
                res.status(200).json(categoria);
        }else{
            res.status(404).send({
                message: 'Category not found'
            });
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error -->'
        });
        next(error);
    }
}

