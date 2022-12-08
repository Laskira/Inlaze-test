import { Request, Response } from "express";

//Modelos
import Message, { IMessage } from "../models/messages";
import User from "../models/user";
import { mensaje } from "interfaces";

//Crear mensaje
export async function CrearMensaje(req: Request, res: Response) {
  const NewMessage: IMessage = req.body;

  const user = await User.findById(NewMessage.IdUser);

  // user Validation
  if (!user) {
    var mensaje: mensaje = {
      icon: "error",
      titulo: "Error",
      mensaje: "This user is not register",
    };
    return res.status(400).json(mensaje);
  }

  NewMessage.UserData = { Email: user.Email, Id: user._id };

  await Message.create(NewMessage)
    .then((message) => {
      var mensaje: mensaje = {
        icon: "success",
        titulo: "Successfully registered",
        mensaje: "You have saved a message",
      };
      return res.status(200).json(mensaje);
    })

    .catch((err) => {
      var mensaje: mensaje = {
        icon: "error",
        titulo: "Oops",
        mensaje: "An error has occurred",
      };
      return res.status(400).json(mensaje);
    });
}

//Buscar mensajes
export async function ObtenerMensajes(
  req: Request,
  res: Response
): Promise<Response> {
  const mensajes = await Message.find();
  return res.json(mensajes);
}

//Buscar mensajes
// export async function ObtenerHistorial(req: Request, res: Response) {
//   await Message.findById(req.params.id)
//     .then((message) => {
//       return res.status(200).json(message);
//     })
//     .catch((err) => {
//       var mensaje: mensaje = {
//         icon: "error",
//         titulo: "Oops",
//         mensaje: "An error has occurred",
//       };
//       return res.status(400).json(mensaje);
//     });
// }


//Buscar mensajes de un usuario
export async function ObtenerMensajesUsario(
  req: Request,
  res: Response
) {
  const { id } = req.params;
  const user = await User.findById(id);
  if (user) {
    const message = await User.find({IdUser: {$eq: id}});
    return res.json(message);
  } else {
    var mensaje: mensaje = {
      icon: "error",
      titulo: "Oops",
      mensaje: "An error has occurred",
    };
    return res.json(mensaje);
  }
}
