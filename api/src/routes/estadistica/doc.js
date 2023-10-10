/**
 * @swagger
 * components:
 *   schemas:
 *     Estadisticas:
 *       type: object
 *       properties:
 *         dineroRepuestos:
 *           type: string
 *           description: Reference to RepuestoInsumo model.
 *         motos:
 *           type: string
 *           description: Reference to Moto model.
 *         manoDeObra:
 *           type: string
 *           description: Reference to Service model.
 *         precioRepuestos:
 *           type: string
 *           description: Reference to Service model.
 *         precioExtra:
 *           type: string
 *           description: Reference to Service model.
 *         PrecioRyE:
 *           type: string
 *           description: Reference to Service model.
 *         trabajosRealizados:
 *           type: string
 *           description: Reference to Trabajo model.
 */

//DELETE ESTADISTICAS

/**
 * @swagger
 * /estadisticas/{id}:
 *   delete:
 *     summary: Eliminar una estadística por ID
 *     description: Elimina una estadística de la base de datos por su ID.
 *     tags: [Estadisticas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la estadística a eliminar.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Estadística eliminada con éxito.
 *         content:
 *           application/json:
 *             example:
 *               message: Estadística eliminada exitosamente
 *       404:
 *         description: Error al eliminar la estadística. La estadística no se encontró.
 *         content:
 *           application/json:
 *             example:
 *               message: Estadística no encontrada
 *       500:
 *         description: Error al eliminar la estadística.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al eliminar la estadística
 *               error: Detalles del error
 */

//GET ESTADISTICAS

/**
 * @swagger
 * /estadisticas:
 *   get:
 *     summary: Obtener todas las estadísticas
 *     description: Obtiene todas las estadísticas de la base de datos.
 *     tags: [Estadisticas]
 *     responses:
 *       200:
 *         description: Estadísticas obtenidas con éxito.
 *         content:
 *           application/json:
 *             example:
 *               message: Estadísticas obtenidas exitosamente
 *               data: [Array of estadisticas]
 *       500:
 *         description: Error al obtener las estadísticas.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al obtener las estadísticas
 *               error: Detalles del error
 */

//POST ESTADISTICAS

/**
 * @swagger
 * /estadisticas:
 *   post:
 *     summary: Crear una nueva estadística
 *     description: Crea una nueva estadística y la guarda en la base de datos.
 *     tags: [Estadisticas]
 *     requestBody:
 *       description: Datos de la nueva estadística
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Estadisticas'
 *     responses:
 *       201:
 *         description: Estadística creada con éxito.
 *         content:
 *           application/json:
 *             example:
 *               message: Estadística creada exitosamente
 *               data: [Created Estadistica]
 *       500:
 *         description: Error al crear la estadística.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al crear la estadística
 *               error: Detalles del error
 */

//PUT ESTADISTICAS

/**
 * @swagger
 * /estadisticas/{id}:
 *   put:
 *     summary: Actualizar una estadística por ID
 *     description: Actualiza una estadística en la base de datos por su ID.
 *     tags: [Estadisticas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la estadística a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos actualizados de la estadística
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Estadisticas'
 *     responses:
 *       200:
 *         description: Estadística actualizada con éxito.
 *         content:
 *           application/json:
 *             example:
 *               message: Estadística actualizada exitosamente
 *               data: [Updated Estadistica]
 *       404:
 *         description: Error al actualizar la estadística. La estadística no se encontró.
 *         content:
 *           application/json:
 *             example:
 *               message: Estadística no encontrada
 *       500:
 *         description: Error al actualizar la estadística.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al actualizar la estadística
 *               error: Detalles del error
 */
