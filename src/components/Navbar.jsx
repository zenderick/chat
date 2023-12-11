import React, { useContext } from 'react'
import {ChatContext} from '../context/chatProvider'


const Navbar = () => {

    const {usuario, ingresoUsuario, cerrarSesion} = useContext(ChatContext)

  return (
    <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mx-5'>
            Chat
        </span>
        <div>
            {
                usuario.estado ?(
                    <button className='btn btn-outline-danger my-2 mx-5' onClick={cerrarSesion}>
                        Cerrar Sesion
                    </button>
                ): (
                    <button className='btn btn-outline-success my-2 mx-5' onClick={ingresoUsuario} >
                        Acceder
                    </button>
                )
            }

        </div>
    </nav>
  )
}

export default Navbar