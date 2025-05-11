const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("TU_STRING_DE_MONGODB")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("Error de conexión:", err));

// Esquema y modelo
const usuarioSchema = new mongoose.Schema({
  nombre: String,
  correo: String
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

// Rutas
app.get("/usuarios", async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

app.post("/usuarios", async (req, res) => {
  const nuevo = new Usuario(req.body);
  await nuevo.save();
  res.json(nuevo);
});

app.put("/usuarios/:id", async (req, res) => {
  await Usuario.findByIdAndUpdate(req.params.id, req.body);
  res.sendStatus(200);
});

app.delete("/usuarios/:id", async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

// Arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
