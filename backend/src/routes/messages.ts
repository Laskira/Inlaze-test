import { Router } from "express";
import {
  CrearMensaje,
  ObtenerMensajes,
  ObtenerMensajesUsario,
} from "../controllers/messages";
import { TokenValidation } from "../libs/verificarTokens";

const RouterMessages: Router = Router();

RouterMessages.route("/")
  .get(ObtenerMensajes)
  .post(TokenValidation, CrearMensaje);

RouterMessages.route("/show/:id").get(ObtenerMensajesUsario);

export default RouterMessages;
