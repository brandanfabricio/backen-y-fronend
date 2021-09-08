const mongoose = require('mongoose');
const {Schema}= mongoose

const Tecnologia = new Schema({
    name: {type: String, maxLength:50},
    description:{type:String},
    logo: {type: String}, 
    tags: [{type: String}]
},
{
    timestamp: {createdAt:true, updatedAt:true}
}
);

module.exports = mongoose.model('Tecnologia',Tecnologia);


