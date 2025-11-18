import express, { Express } from "express";
import cors from "cors";
import itemsRouter from "./routes/items";
import { errorHandler } from "./middleware/errorHandler";

const app: Express = express();


//Middlewares
app.use(cors());
app.use(express.json());


//rutas 
app.use("/api/items", itemsRouter);


//Middleware manejo errores 
app.use(errorHandler);


//Arrancar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
});