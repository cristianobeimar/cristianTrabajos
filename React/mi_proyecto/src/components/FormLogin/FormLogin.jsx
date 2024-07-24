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
  const [BtnActivo, setBtnActivo] = useState(false)
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
        setBtnActivo(true)
        console.log(u);
      } else {
        console.log("No hay usuario");
      }
    });
  }, []);
  const CerrarSesion = async () => {
    try {
      await signOut(auth);
      setBtnActivo(false)
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
        <>
          <button
            className="button"
            onClick={(e) => {
              setactivo(true);
            }}
          >
            iniciar cesion
          </button>
          {activo && (
            <div className="conatainer-login-form">
              <div
                className="background-modal"
                onClick={() => setactivo(false)}
              />
              <div className="form-container">
                {!registrarse && (
                  <>
                    <h2>Iniciar cesion</h2>
                    <form>
                      <input
                        type="email"
                        placeholder="Email o numero de celular"
                      />

                      <input type="password" placeholder="Contraseña" />

                      <button
                        className="buut"
                        type="button"
                        value="iniciar cesion"
                      >
                        Iniciar cesion
                      </button>
                      <p className="text-align-center" href="">
                        ¿Olvidastes tu contraseña?
                      </p>
                      <button onClick={() => setRegistrarse(true)}>
                        Crear cuenta
                      </button>

                      {/* <LoginUsuario /> */}
                      <div className="remember">
                        <input
                          className="check"
                          type="checkbox"
                          name=""
                          id="remember"
                        />

                        <label for="remember">Recuerdame</label>
                      </div>
                    </form>
                    <button className="button" onClick={iniciarGoogle}>
                      Iniciar sesion con Google
                    </button>
                  </>
                )}
                {registrarse && (
                  <LoginUsuario setRegistrarse={setRegistrarse} />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
