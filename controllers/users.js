require('express')


const getUser = (req, res) => {
    res.json({
        msg:'get ok'
    })
}
const postUser = (req, res) => {
    const {nombre, edad} = req.body

    res.json({
        msg:'post ok',
        nombre,
        edad
    })
}
const putUser = (req, res) => {
    const id = req.params.id;
    
    res.json({
        msg:'put ok',
        id
    })
}
const deleteUser = (req, res) => {
    res.json({
        msg:'delete ok'
    })
}

module.exports = {
    getUser,
    postUser,
    deleteUser,
    putUser
}