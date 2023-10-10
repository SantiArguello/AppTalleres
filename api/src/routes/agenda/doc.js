/**
 * @swagger
 * components:
 *   schemas:
 *     Agenda:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único de la agenda.
 *         fecha:
 *           type: string
 *           format: date-time
 *           description: Fecha de la agenda (por defecto, la fecha actual).
 *         nombre:
 *           type: string
 *           description: Nombre del cliente asociado a esta agenda.
 *         motoFiltrado:
 *           $ref: '#/components/schemas/Moto'
 *         trabajo:
 *           type: string
 *           description: ID del trabajo filtrado asociado a esta agenda.
 *       example:
 *         _id: ID único de la agenda
 *         fecha: 2023-10-09T12:00:00Z
 *         nombre: Nombre del Cliente
 *         motoFiltrado:
 *           _id: ID único de la moto
 *           modelo: MotoFiltrado
 *           kilometros: 1000
 *           año: 2022
 *           cliente:
 *             $ref: '#/components/schemas/Cliente'
 *           historial:
 *             - $ref: '#/components/schemas/Service'
 */

//DELETE agenda
/**
 * @swagger
 * /agenda/{id}:
 *   delete:
 *     summary: Eliminar una agenda por ID
 *     description: Elimina una agenda de la base de datos por su ID.
 *     tags: [Agenda]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la agenda a eliminar.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Agenda eliminada correctamente.
 *         content:
 *           application/json:
 *             example:
 *               message: Agenda eliminada correctamente
 *       404:
 *         description: Error al eliminar la agenda. La agenda no se encontró.
 *         content:
 *           application/json:
 *             example:
 *               message: Agenda no encontrada
 *       400:
 *         description: Error al eliminar la agenda.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al eliminar la agenda
 *               error: Detalles del error
 */

//GET agenda
/**
 * @swagger
 * /agenda:
 *   get:
 *     summary: Obtener todas las agendas
 *     description: Obtiene todas las agendas registradas en la base de datos.
 *     tags: [Agenda]
 *     responses:
 *       200:
 *         description: Listado de agendas obtenido con éxito.
 *         content:
 *           application/json:
 *             example:
 *               - fecha: 2023-10-09T12:00:00Z
 *                 nombre: Nombre del Cliente 1
 *                 motoFiltrado: ID de la MotoFiltrada 1
 *                 trabajo: ID del TrabajoFiltrado 1
 *               - fecha: 2023-10-10T12:00:00Z
 *                 nombre: Nombre del Cliente 2
 *                 motoFiltrado: ID de la MotoFiltrada 2
 *                 trabajo: ID del TrabajoFiltrado 2
 *       500:
 *         description: Error al obtener las agendas.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al obtener las agendas
 *               error: Detalles del error
 */

//POST agenda
/**
 * @swagger
 * /agenda:
 *   post:
 *     summary: Crear una nueva agenda
 *     description: Crea una nueva agenda en la base de datos.
 *     tags: [Agenda]
 *     requestBody:
 *       description: Datos de la nueva agenda a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Agenda' # Asegúrate de definir el esquema de la agenda
 *     responses:
 *       201:
 *         description: Agenda creada con éxito.
 *         content:
 *           application/json:
 *             example:
 *               fecha: 2023-10-11T12:00:00Z
 *               nombre: Nombre del Cliente
 *               motoFiltrado: ID de la MotoFiltrada
 *               trabajo: ID del TrabajoFiltrado
 *       400:
 *         description: Error al crear la agenda.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al crear la agenda
 *               error: Detalles del error
 */

//PUT agenda
/**
 * @swagger
 * /agenda/{id}:
 *   put:
 *     summary: Actualizar una agenda por ID
 *     description: Actualiza una agenda en la base de datos por su ID.
 *     tags: [Agenda]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la agenda a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos actualizados de la agenda.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Agenda' # Asegúrate de definir el esquema de la agenda
 *     responses:
 *       200:
 *         description: Agenda actualizada con éxito.
 *         content:
 *           application/json:
 *             example:
 *               fecha: 2023-10-11T12:00:00Z
 *               nombre: Nombre del Cliente (actualizado)
 *               motoFiltrado: ID de la MotoFiltrada (actualizado)
 *               trabajo: ID del TrabajoFiltrado (actualizado)
 *       404:
 *         description: Error al actualizar la agenda. La agenda no se encontró.
 *         content:
 *           application/json:
 *             example:
 *               message: Agenda no encontrada
 *       400:
 *         description: Error al actualizar la agenda.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al actualizar la agenda
 *               error: Detalles del error
 */
