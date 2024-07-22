import { useEffect, useState } from "react";
import "./login.css";
import { LoginUsuario } from "../LoginUsuario/LoginUsuario";
// import LoginUsuario from "../LoginUsuario/LoginUsuario";
export default function FormLogin() {
  const [activo, setactivo] = useState(false);
  const [registrarse, setRegistrarse] = useState(false);
  return (
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
          <div className="background-modal" onClick={() => setactivo(false)} />
          <div className="form-container">
            {!registrarse && (
              <>
                <h2>Iniciar cesion</h2>
                <form>
                  <input type="email" placeholder="Email o numero de celular" />

                  <input type="password" placeholder="Contraseña" />

                  <button className="buut" type="button" value="iniciar cesion">
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
               
              </>
            )}
            {registrarse && (
              <LoginUsuario setRegistrarse={setRegistrarse}/>
             
            )}
          </div>
          {/* <button
              className="button"
              onClick={(e) => {
                setactivo(false);
              }}
            >
              cerrar
            </button> */}
        </div>
      )}
    </>
  );
}
