const {response} = require('express');


const userGetController = (req, res=response) => {
    const {a,b} = req.query;
    res.json({
        name: 'Hello get - controller',
        a,
        b
    });
}

const userPostController = (req, res=response) => {
    const body = req.body;
    console.log(body);
    console.log("body1");
    res.json({
        msg: 'Hello post - controller',
        body
    });
}

const userPutController = (req, res=response) => {
    const id= req.params;
    res.json({
        name: 'Hello put - controller',
        id
    });
}

const userDeleteController = (req, res=response) => {
    res.send('Hello delete - controller');
}

const getObjController = (req, res=response) => {
    res.status(666).json({
            nombre: "alf",
            id: 123,
            cod: "001",
            bool: true
    });
}
module.exports = {
    userGetController,
    userPostController,
    userPutController,
    userDeleteController,
    getObjController
}

