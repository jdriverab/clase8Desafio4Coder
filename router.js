const express = require("express");
const { Router } = express;
//const {data} = require("./data")

const apiRouter = new Router();

const data = [
    {"id": 1,"title": "Cebolla", "thumbnail": "https://LaDireccion", "precio":5000},
    {"id": 2,"title": "Lechuga","thumbnail": "https://LaDireccion2", "precio":6000},
    {"id": 3,"title": "Ajo","thumbnail": "https://LaDireccion3",  "precio": 7000}
]

apiRouter.get('/', (req, res)=>{

    //const data = JSON.stringify(data, null, 2)
    
    res.send(data);
});

apiRouter.get('/:id', async (req, res)=>{
    res.send();
});

apiRouter.post('/', async (req, res)=>{
    res.send();
});

apiRouter.put('/:id', async (req, res)=>{
    res.send();
});

apiRouter.delete('/:id', async (req, res)=>{
    res.send();
});


module.exports = apiRouter;