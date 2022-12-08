
import { Router } from "express";
const router = Router();

// Importar Rutas
import RouterUsers from './users';
import RouterMessages from "./messages";

// Usar Rutas
router.use("/users", RouterUsers);
router.use("/message", RouterMessages);

export default router;