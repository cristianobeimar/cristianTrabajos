import { useEffect, useState } from "react";
import "./login.css";
import { LoginUsuario } from "../LoginUsuario/LoginUsuario";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, providerGoogle } from "../../fireBase/credenciales";
// import LoginUsuario from "../LoginUsuario/LoginUsuario";

export default function FormLogin() {
  const [activo, setactivo] = useState(false);
  const [registrarse, setRegistrarse] = useState(false);
  const [User, setUser] = useState({});
  const [BtnActivo, setBtnActivo] = useState(false);
  const iniciarGoogle = async () => {
    try {
      await signInWithPopup(auth, providerGoogle);
    } catch (error) {
      console.log("error al iniciar secion");
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, async (usuario) => {
      if (usuario) {
        const u = await usuario;
        setUser(u);
        setBtnActivo(true);
        console.log(u);
      } else {
        console.log("No hay usuario");
      }
    });
  }, []);

  const CerrarSesion = async () => {
    try {
      await signOut(auth);
      setBtnActivo(false);
      console.log(BtnActivo);
    } catch (error) {
      console.log("no se pudo cerrar Sesion");
    }
  };

  return (
    <>
      {BtnActivo && (
        <div>
          <p style={{ color: "#fff" }}>{User.email}</p>
          <br />
          <button onClick={() => CerrarSesion()}>Cerrar Sesion</button>
        </div>
      )}
      {!BtnActivo && (
        <button
          className="button"
          onClick={(e) => {
            setactivo(true);
          }}
        >
          iniciar sesion
        </button>
      )}
      {activo && (
        <div className="conatainer-login-form">
          <div className="background-modal" onClick={() => setactivo(false)} />
          <div className="form-container">
            <LoginUsuario />
            <button
              className="button"
              onClick={iniciarGoogle}
              style={{ position: "relative" }}
            >
              Iniciar sesion con____________
              <img
                src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png"
                alt="Google"
                width="70px"
                style={{ position: "absolute", top: "-3px", right: "30px" }}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
