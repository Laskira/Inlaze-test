import { Router } from "express";

import {
  CrearUser,
  IniciarSesion,
  Perfil,
  VerUsers,
} from "../controllers/users";
import { TokenValidation } from "../libs/verificarTokens";

const RouterUsers: Router = Router();

RouterUsers.route("/").post(CrearUser).get(TokenValidation, Perfil);

RouterUsers.route("/acceder").post(IniciarSesion);
RouterUsers.route("/cuentas").get(TokenValidation, VerUsers);

export default RouterUsers;
