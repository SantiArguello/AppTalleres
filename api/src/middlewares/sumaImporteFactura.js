// funcion para sumar importe de descripcion el cual sera el total

const sumaImporteFactura = async function (next) {
    let total = 0;
    if (this.descripcion) {
        this.descripcion.forEach(item => {
            total += item.importe;
        })
    }

    this.precioTotal = total;
    next();
}

module.exports = sumaImporteFactura;
