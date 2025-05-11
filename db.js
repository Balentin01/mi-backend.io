const mongoose = require('mongoose');

// Esquema de usuario
const userSchema = new mongoose.Schema({
  nombre: String,
  correo: String
});

// Modelo de usuario
const User = mongoose.model('User', userSchema);

// Conexión a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://balentinliranzo32:LXp0zaUfxsrZfd1n@cluster0.mxzemjp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Conectado a MongoDB Atlas');
  } catch (error) {
    console.error('❌ Error de conexión:', error);
  }
};

module.exports = { connectDB, User };
