import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,}
from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../fireBase/credenciales";
import './usuario.css';

export const LoginUsuario = () => {
  const [activado, setactivado] = useState(false);
  const [email, setemail] = useState(null);
  const [contrasena, setcontrasena] = useState(null);
  const [Registrado, setRegistrado] = useState(false);

  const RegistrarUsuario = async (e) => {
    e.preventDefault();
    console.log(contrasena);
    console.log(email);
    try {
      await signInWithEmailAndPassword(auth, email, contrasena);
    } catch (error) {
      console.log(error);
    }
  };

  const crearUsuario = async (e) => {
    e.preventDefault();
    console.log(contrasena);
    console.log(email);
    try {
      await createUserWithEmailAndPassword(auth, email, contrasena);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // <div className="containerUsuario">
    //   <div className="background-modal2" onClick={() => setactivado(false)} />
    <>
      <>
        {/* <input type="text" 
        onChange={nombre}
        placeholder='Ingresa tu nombre' />
        
        <input type="text" onChange={apellido}
        placeholder='Apellidos' /> */}
      </>
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
          value={contrasena}
          type="password"
          onChange={(e) => setcontrasena(e.target.value)}
          placeholder="Contraseña"
        />

        <button className="buut" type="submit">
          {Registrado ? "Haz click para Ingresar" : "Haz click para Crear tu Cuenta "}
        </button>
        
      </form>
      <button className="button"
        onClick={() => {
          setRegistrado(!Registrado);
        }}
      >
        {Registrado ? "¿Aun no tienes Cuenta? Crea Una Aqui" : "¿Ya tienes cuenta? Ingresa aqui"}
      </button>
    </>
  );
};

