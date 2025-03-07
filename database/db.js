const mongoose = require('mongoose')

const connecToDb = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("MongoDB Atlas Conectado!")).catch((err) => console.error(err))
    
}

module.exports = connecToDb