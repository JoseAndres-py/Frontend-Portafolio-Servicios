var jwt = require('jsonwebtoken');
const models = require('../models');


module.exports = {

    //generar el token
    encode: async(id, rol) => {
        const token = jwt.sign({
            id: id,
            rol: rol,
        }, 'config.secret',{
            expiresIn: 8400
        });

        return token;
    },
    //permite decodificar el token
    decode: async(token) => {
        try {
            const { id } = await jwt.verify(token, 'config.secret');
            const user = await models.Usuario.findOne({where:{
                id: id,
            }});

            if(user){
                return user;
            }else{
                return false;
            }
        } catch (e) {
            const newToken = await checkToken(token);
            return newToken
        }

    }
}