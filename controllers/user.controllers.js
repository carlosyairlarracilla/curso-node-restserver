const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const {usuario,password,page = 1,limit} = req.query;
    res.json({
        msj: 'get API - controlador',
        usuario,
        password,
        page,
        limit
    });
}
const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;
    res.status(201).json({
        msj: 'post API - controlador',
        nombre,
        edad
    });
}
const usuariosPut = (req = request, res = response) => {
    const { id } = req.params;
    
    res.status(400).json({
        msj: 'put API - controlador',
        id
    });
}
const usuariosPatch = (req, res) => {
    res.json({
        msj: 'patch API - controlador'
    });
}
const usuariosDelete = (req, res) => {
    res.json({
        msj: 'delete API - controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}