if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
module.exports = {
    MONGO_URI: process.env.MOGO_URI,

    PORT : process.env.PORT
   
}