const jwt = require('jsonwebtoken');
const models = require('../models');

const checkToken = async(token) =>{
    let localId = null;
    try {
        const { id } = decode(token);
        localId = id;
    } catch (error) {
        
    }
    const user = await models.user.findOne({where:{
        id: localId,
        estado: 1
    }});

    if(user){
        const token = encode(user);
        return{
            token: token,
            rol: user.rol
        }
    }else{
        return false
    }
}

module.exports = {
    encode: async(user) =>{
        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email,
            rol: user.rol,
            status: user.estado,
            createdAt: user.createdAt
        }, 'config.secret',{
            expiresIn: 8400
        });

        return token;
    },
    decode: async(token) =>{
        try {
            const { id } = await jwt.verify(token, 'config.secret');
            const user = await models.user.findOne({where:{
                id: id,
            }});

            if(user){
                return user;
            }else{
                return false;
            }
        } catch (error) {
            const newToken = await checkToken(token);
            return newToken
        }

    }
}