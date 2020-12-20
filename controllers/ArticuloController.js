const db = require('../models');

exports.list = async(req, res, next) => {
    try {
        const articulos = await db.Articulo.findAll({
            /*{where: {estado: 1}}*/
            include: {
                model: db.Categoria,
                as: 'categoria',
                attributes: ['id', 'nombre', 'descripcion']
            }
        }); 
        if(articulos){
            res.status(200).json(articulos);
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
        const articulo = await db.Articulo.findOne({where: {nombre: req.body.nombre}}); // Limpiar strings - Tildes Minisculas - Sin espacios
        
        if(articulo){
            res.status(409).send({
                message: 'Sorry your request has a conflict whit our system state, maybe the name exist'
            });
        }else{
            const articulo = await db.Articulo.create(req.body);
            res.status(200).json(articulo);
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
        const articulo = await db.Articulo.findOne({where: {id: req.body.id}});
        if(articulo){
            const articulo = await db.Articulo.update({codigo: req.body.codigo, nombre: req.body.nombre, descripcion: req.body.descripcion, categoriaId: req.body.categoriaId},
                {
                    where:{
                        id: req.body.id
                    }
                    //returning: true
                });
                res.status(200).json(articulo);
        }else{
            res.status(404).send({
                message: 'Article not found'
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
        const articulo = await db.Articulo.findOne({where: {id: req.body.id}});
        if(articulo){
            const articulo = await db.Articulo.update({estado: 1},
                {
                    where:{
                        id: req.body.id
                    }
                    //returning: true
                });
                res.status(200).json(articulo);
        }else{
            res.status(404).send({
                message: 'Article not found'
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
        const articulo = await db.Articulo.findOne({where: {id: req.body.id}});
        if(articulo){
            const articulo = await db.Articulo.update({estado: 0},
                {
                    where:{
                        id: req.body.id
                    }
                    //returning: true
                });
                res.status(200).json(articulo);
        }else{
            res.status(404).send({
                message: 'Article not found'
            });
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error -->'
        });
        next(error);
    }
}

