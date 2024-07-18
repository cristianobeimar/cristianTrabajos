import { useEffect, useState } from "react";
import './login.css'
export default function FormLogin() {
  const [activo, setactivo] = useState(false);
  return (
    <>
      <button
        className="button"
        onClick={(e) => {
          setactivo(true);
        }}>
          
        iniciar cesion
      </button>

      {activo && (
        <div className="conatainer-login-form">
          <div className="background-modal" onClick={() => setactivo(false)} />
          <div className="form-container">
            <h2>Iniciar cesion</h2>
            <form>
              <input type="email" placeholder="Email o numero de celular" />

              <input type="password" placeholder="Contraseña" />

              <button className="buut" type="button" value="iniciar cesion">
                Iniciar cesion
              </button>
              <a className="text-align-center" href="">
                ¿Olvidastes tu caontraseña?
              </a>
              <p className="tex.align-center">Olvidates tu contraseña?</p>
              <button className="btn-code" type="button">
                Crear cuenta nueva
              </button>

              <div className="remember">
                <input className="check" type="checkbox" name="" id="remember"/>
                <label for="remember">Recuerdame</label>
              </div>
            </form>

            {/* <button
              className="button"
              onClick={(e) => {
                setactivo(false);
              }}
            >
              cerrar
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}
