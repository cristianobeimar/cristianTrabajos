
import { useEffect, useState } from "react";
    export const LoginUsuario = ({
        nombre,
        apellido,
        correo,
        contraseña,setRegistrarse
      }) =>{

        const [activado, setactivado] = useState(false);
        <button
        className="button"
        onClick={(e) => {
            (true);
        }}>        
        Crear cuenta nueva
      </button>

    // const [input, setInput] = useState("");
    // const inputText= (e)=>{
    //   const text = e.target.value
    //   setInput(text);
    // }

    const saveData = ()=>{
        localStorage.setItems("nombre".input)
    }

  return (
    <div className='containerUsuario'>
         <div className="background-modal2" onClick={() => setactivado(false)} />
        <div>
        <input type="text" 
        onChange={nombre}
        placeholder='Ingresa tu nombre' />

        <input type="text" onChange={apellido}
         placeholder='Apellidos' />

        <input type="email" onChange={correo} placeholder="Email o numero de celular" />
        <input type="password" onChange={contraseña} placeholder="Contraseña" />

        <button className='button' onClick={saveData}>
            guaradar</button>
        </div>
        {/* <button onClick={() => setRegistrarse(false)}>
                  ingresar
                </button> */}
    </div>
  )
}

