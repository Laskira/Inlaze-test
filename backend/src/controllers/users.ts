import { Request, Response } from 'express';
import { encryptPassword, validateEncrypt } from '../libs/password';
import jwt from 'jsonwebtoken';

//Modelos
import User, { IUser } from '../models/user';
import { mensaje } from 'interfaces';

export async function CrearUser(req: Request, res: Response) {

    const NewUser: IUser = req.body;

    NewUser.Password = await encryptPassword(NewUser.Password);

    await User.create(NewUser).then((User) => {
        var mensaje: mensaje = {
            icon: "success",
            titulo: "Successfully registered",
            mensaje: "You have been successfully registered"
        };
        return res.status(200).json(mensaje);
    })

        .catch((err) => {
            var mensaje: mensaje = {
                icon: "error",
                titulo: "Error",
                mensaje: "The email or username entered is already registered"
            };
            return res.status(400).json(mensaje);
        })

}

//Iniciar sesión
export async function IniciarSesion(
    req: Request,
    res: Response
): Promise<Response> {
    const { Password, Email } = req.body;

    const Usuario = await User.findOne({ Email: Email });

    //Comprobación de Documento
    if (!Usuario) {
        var mensaje: mensaje = {
            icon: "errror",
            titulo: "Error",
            mensaje: "The entered user is not registered"
        }

        return res.status(400).json(mensaje);
    }

    //Comprobación de contraseña
    const passwordCorrecta: boolean = await validateEncrypt(
        Password,
        Usuario.Password
    );

    if (!passwordCorrecta) {
        var mensaje: mensaje = {
            icon: "error",
            titulo: "Error",
            mensaje: "The password entered does not match the username"
        };
        return res.status(400).json(mensaje);
    }

    const token: string = jwt.sign(
        { _id: Usuario._id },
        process.env.TOKEN_SECRET || 'TokenTest'
    );

    return res.status(200).json({ token });
}

//Perfil
export async function Perfil(req: Request, res: Response): Promise<Response> {
    const Usuario = await User.findById(req.url, { Password: 0 });
    if (!Usuario)
        return res.status(400).json("The user is not registered")

    return res.json(User);
}

export async function VerUsers(
    req: Request,
    res: Response
) {
    await User.find()
    .sort({Documento: 1})
    .then((user) => {
        return res.status(200).json(user);
    })

    .catch((err) => {
        var mensaje: mensaje = {
          icon: "error",
          titulo: "Oops",
          mensaje: "There is a error",
        };
        return res.status(400).json(mensaje);
      });
}



