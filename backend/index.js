const server = require('./server');
const{PORT,MONGO_URI} = require('./config');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fabriciobrandan:fabricio149@cluster0.2ik5c.mongodb.net/pruebas?retryWrites=true&w=majority', {useNewUrlParser: true}).then(()=>{

    
    server.listen(PORT,()=>{
        console.log(`Servidor del backend corriendo en el puerto ${PORT}`);
        
    })

}).catch(console.log);
