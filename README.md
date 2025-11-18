📦 CRUD API con Express + TypeScript

Proyecto simple de API REST construido con Node.js, Express y TypeScript.

Incluye:

CRUD completo de Items

Arquitectura modular (routes, controllers, middleware, types)

Manejo centralizado de errores

CORS habilitado

Servidor TypeScript → JavaScript


<br>
<br>
<br>


🚀 Tecnologías

Node.js

Express

TypeScript

CORS

<br>
<br>
<br>

📁 Estructura del proyecto
src/
  controllers/   → Lógica de negocio
  middleware/    → Middlewares personalizados
  routes/        → Endpoints organizados por recurso
  types/         → Tipos e interfaces TS
  app.ts         → Configuración principal
<br>
<br>
<br>
<br>
<br>

▶️ Cómo correr el proyecto
1) Clonar el repo
git clone https://github.com/tu-usuario/express-ts-crud.git
cd express-ts-crud

2) Instalar dependencias
npm install

3) Modo desarrollo
npm run dev

4) Compilar y ejecutar (producción)
npm run build
npm start
<br>
<br>
<br>
<br>
<br>

🔥 Endpoints del CRUD
GET /api/items

Retorna todos los items.

GET /api/items/:id

Retorna un item por ID.

POST /api/items

Body esperado:

{
  "name": "Teclado",
  "price": 200
}

PUT /api/items/:id

Actualiza un item existente.

DELETE /api/items/:id

Elimina un item por ID.
<br>
<br>
<br>
<br>
<br>

🧩 Mejoras futuras

Validación con Zod

Autenticación JWT

Conexión a MongoDB o PostgreSQL

Tests con Jest + Supertest
<br>
<br>
<br>
<br>
<br>


📜 Licencia

MIT
