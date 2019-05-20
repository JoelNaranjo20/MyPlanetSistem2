const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadSchema = new Schema({
  Nombre: String,
  Apellido: String,
  Edad:String,
  Genero: String,
  Correo: String,
  Contraseña: String,
  Contenido:
    {
      type: Schema.Types.ObjectId,
      ref: "Contenido"
    }

});

var Contenido = mongoose.model("Contenido", ActividadSchema);
module.exports = Contenido;
