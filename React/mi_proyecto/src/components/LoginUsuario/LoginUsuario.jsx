import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../fireBase/credenciales";
import "./usuario.css";

export const LoginUsuario = () => {
  const [activado, setactivado] = useState(false);
  const [email, setemail] = useState("");
  const [contraseña, setcontrasena] = useState("");
  const [Registrado, setRegistrado] = useState(false);
  const [Usuario, setUsuario] = useState(null);
  const RegistrarUsuario = async (e) => {
    e.preventDefault();
    console.log(contraseña);
    console.log(email);
    try {
      console.log(contraseña);
      console.log(email);
      await signInWithEmailAndPassword(auth, email, contraseña);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
        console.log("hay usuario");
      } else {
        console.log("no hay usuario");
      }
    });
  }, []);

  const crearUsuario = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, contraseña);
      console.log("se creo el usuARIO");
      if (Usuario) {
        await fetch("http://localhost:3000/usuarios", {
          method: "POST",
          headers: { "content-Type": "aplication/json" },
          body: JSON.stringify({ correo: email, id_usuario: Usuario.uid }),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <></>
      <form
        onSubmit={(e) => (Registrado ? RegistrarUsuario(e) : crearUsuario(e))}
      >
        <h1>{Registrado ? "Ingresar" : "Crear Cuenta"}</h1>
        <input
          value={email}
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email o numero de celular"
        />
        <input
          value={contraseña}
          type="password"
          onChange={(e) => setcontrasena(e.target.value)}
          placeholder="Contraseña"
        />

        <button className="buut" type="submit">
          {Registrado ? " Ingresar" : "Crear Cuenta "}
        </button>
      </form>
      <button
        className="button"
        onClick={() => {
          setRegistrado(!Registrado);
        }}
      >
        {Registrado
          ? "¿Aun no tienes Cuenta? Crea Una Aqui"
          : "¿Ya tienes cuenta? Ingresa aqui"}
      </button>
    </>
  );
};
