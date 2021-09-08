const express = require('express');
const server = express();
const cors = require('cors');
const {Tecnologia} =require('../models')


server.use(express.json());
server.use(express.static(__dirname + '/../public'));
server.use(cors());

server.get('/api/tecnologia',async (req, res)=>{
    let tecnologia = await Tecnologia.find();
    tecnologias = tecnologia.map(e  =>{
        e.logo =  `${req.protocol}://${req.headers.host}/img/${e.logo}`;
        return e;
    });
    return res.send({error: false, data: tecnologias});
})

server.get('/api/tecnologia/:id',async (req, res)=>{
    const {id} = req.params;
    let tecnologia = await Tecnologia.findById(id);

    tecnologia.logo =  `${req.protocol}://${req.headers.host}/img/${tecnologia.logo}`;
        
    
    return res.send({error: false, data: tecnologia});
})

server.get('/api/tecnologia/busqueda/:name',async (req, res)=>{
    const {name} = req.params;
    
    let tecnologia = await Tecnologia.find({ 
        name:{$regex: new RegExp(name,"i")}
    });
    tecnologias = tecnologia.map(e  =>{
        e.logo =  `${req.protocol}://${req.headers.host}/img/${e.logo}`;
        return e;
    });
    return res.send({error: false, data: tecnologias});
})

module.exports =server;