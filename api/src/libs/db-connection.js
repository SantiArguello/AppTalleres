const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://saantiarguello:AppTalleres@cluster0.fod3mak.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB establecida');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};

module.exports = connectToDatabase;