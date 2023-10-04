const mongoose = require('mongoose');

const sumaPreciosService = async function (next) {
  // Calcular la suma de precioExtra
  const precioExtraSum = this.precioExtra || 0;

  // Calcular la suma de los precios de repuestos
  let repuestosSum = 0;
  if (this.cantidadRepuestos && this.cantidadRepuestos.length > 0) {
    for (const repuesto of this.cantidadRepuestos) {
      const repuestoDoc = await mongoose.model('RepuestoInsumo').findById(repuesto.repuesto);
      if (repuestoDoc) {
        repuestosSum += repuestoDoc.precioVenta * repuesto.cantidad;
      }
    }
  }

  // Calcular precioRepuestosyExtras
  this.precioRepuestosyExtras = repuestosSum + precioExtraSum;

  // Calcular precioFinal
  this.precioFinal = this.manoDeObra + this.precioRepuestosyExtras;

  next();
};

module.exports = sumaPreciosService;