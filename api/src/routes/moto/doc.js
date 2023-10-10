/**
 * @swagger
 * components:
 *   schemas:
 *     Moto:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único de la moto.
 *         modelo:
 *          MotoFiltrado'
 *         kilometros:
 *           type: number
 *           description: Kilómetros de la moto.
 *         año:
 *           type: number
 *           description: Año de la moto.
 *         cliente:
 *           $ref: '#/components/schemas/Cliente'
 *         historial:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Service'
 */

//POST MOTOS
/**
 * @swagger
 * /moto:
 *   post:
 *     summary: Crear una nueva moto y asociarla a un cliente
 *     description: Crea una nueva moto en la base de datos y la asocia a un cliente.
 *     tags: [Motos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               modelo:
 *                 type: string
 *                 description: Modelo de la moto.
 *               kilometros:
 *                 type: number
 *                 description: Kilómetros de la moto.
 *               año:
 *                 type: number
 *                 description: Año de la moto.
 *               cliente:
 *                 type: string
 *                 description: ID del cliente al que se asociará la moto.
 *     responses:
 *       201:
 *         description: Moto creada y asociada al cliente con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Moto'
 *       400:
 *         description: Error al crear la moto.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al crear la moto
 *               error: Detalles del error
 *       404:
 *         description: Error al crear la moto. Cliente no encontrado.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al crear la moto
 *               error: Cliente no encontrado
 */

//GET Motos

/**
 * @swagger
 * /moto/{clienteId}:
 *   get:
 *     summary: Obtener todas las motos de un cliente
 *     description: Obtiene una lista de todas las motos asociadas a un cliente específico.
 *     tags: [Motos]
 *     parameters:
 *       - in: path
 *         name: clienteId
 *         required: true
 *         description: ID del cliente del que se desean obtener las motos.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de motos obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Moto'
 *       500:
 *         description: Error al obtener las motos.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al obtener las motos
 *               error: Detalles del error
 */

// DELETE MOTO

/**
 * @swagger
 * /moto/{id}:
 *   delete:
 *     summary: Eliminar una moto por ID
 *     description: Elimina una moto de la base de datos por su ID.
 *     tags: [Motos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la moto a eliminar.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Moto eliminada con éxito.
 *         content:
 *           application/json:
 *             example:
 *               message: Moto eliminada exitosamente
 *       404:
 *         description: Error al eliminar la moto. La moto no se encontró.
 *         content:
 *           application/json:
 *             example:
 *               message: Moto no encontrada
 *       500:
 *         description: Error al eliminar la moto.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al eliminar la moto
 *               error: Detalles del error
 */

// PUT MOTO

/**
 * @swagger
 * /moto/{id}:
 *   put:
 *     summary: Actualizar una moto por ID
 *     description: Actualiza una moto en la base de datos por su ID.
 *     tags: [Motos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la moto a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos de la moto a actualizar.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Moto' # Asegúrate de definir el esquema de la moto
 *     responses:
 *       200:
 *         description: Moto actualizada con éxito.
 *         content:
 *           application/json:
 *             example:
 *               message: Moto actualizada exitosamente
 *               data: [Moto actualizada]
 *       404:
 *         description: Error al actualizar la moto. La moto no se encontró.
 *         content:
 *           application/json:
 *             example:
 *               message: Moto no encontrada
 *       400:
 *         description: Error al actualizar la moto.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al actualizar la moto
 *               error: Detalles del error
 */

//