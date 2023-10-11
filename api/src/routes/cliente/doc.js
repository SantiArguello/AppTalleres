
//POST CLIENTE
/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre del cliente.
 *         apellido:
 *           type: string
 *           description: Apellido del cliente.
 *         correo:
 *           type: string
 *           description: Correo del cliente.
 *         telefono:
 *           type: number
 *           description: Número de teléfono del cliente.
 */

/**
 * @swagger
 * /cliente:
 *   post:
 *     summary: Crear un nuevo cliente
 *     description: Crea un nuevo cliente y su moto en la base de datos.
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       201:
 *         description: Cliente creado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       400:
 *         description: Error al crear el cliente.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al crear el cliente
 *               error: Detalles del error
 */

// GET CLIENTE

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Obtener todos los clientes
 *     description: Obtiene una lista de todos los clientes en la base de datos.
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 *       500:
 *         description: Error al obtener los clientes.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al obtener los clientes
 *               error: Detalles del error
 */

/**
 * @swagger
 * /clientes/buscar:
 *   get:
 *     summary: Buscar clientes por nombre y/o apellido
 *     description: Busca clientes por nombre y/o apellido en la base de datos.
 *     tags: [Clientes]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Término de búsqueda para nombre y/o apellido de clientes.
 *     responses:
 *       200:
 *         description: Lista de clientes encontrados con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 *       500:
 *         description: Error en la búsqueda.
 *         content:
 *           application/json:
 *             example:
 *               message: Error en la búsqueda
 *               error: Detalles del error
 */

/**
 * @swagger
 * /cliente/{id}:
 *   get:
 *     summary: Obtener un cliente por ID
 *     description: Obtiene un cliente por su ID y retorna los detalles del cliente.
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente encontrado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       500:
 *         description: Error al obtener el cliente.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al obtener el cliente
 *               error: Detalles del error
 */

// PUT CLIENTE
/**
 * @swagger
 * /cliente/{id}:
 *   put:
 *     summary: Actualizar un cliente por ID
 *     description: Actualiza un cliente en la base de datos por su ID.
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nuevo nombre del cliente.
 *               apellido:
 *                 type: string
 *                 description: Nuevo apellido del cliente.
 *               correo:
 *                 type: string
 *                 description: Nuevo correo del cliente.
 *               telefono:
 *                 type: number
 *                 description: Nuevo número de teléfono del cliente.
 *     responses:
 *       200:
 *         description: Cliente actualizado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Error al actualizar el cliente. El cliente no se encontró.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al actualizar el cliente
 *               error: Cliente no encontrado
 */

//DELETE CLIENTE

/**
 * @swagger
 * /cliente/{id}:
 *   delete:
 *     summary: Eliminar un cliente por ID
 *     description: Elimina un cliente de la base de datos por su ID.
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente a eliminar.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente eliminado con éxito.
 *         content:
 *           application/json:
 *             example:
 *               message: Cliente eliminado exitosamente
 *       404:
 *         description: Error al eliminar el cliente. El cliente no se encontró.
 *         content:
 *           application/json:
 *             example:
 *               message: Cliente no encontrado
 *       500:
 *         description: Error al eliminar el cliente.
 *         content:
 *           application/json:
 *             example:
 *               message: Error al eliminar el cliente
 *               error: Detalles del error
 */