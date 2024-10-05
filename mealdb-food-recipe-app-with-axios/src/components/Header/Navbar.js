import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; // Importa el componente Link para la navegación
import "./Header.scss"; // Importa los estilos del encabezado
import { MdFoodBank } from "react-icons/md"; // Importa el ícono de un banco de alimentos
import { IoMdMenu } from "react-icons/io"; // Importa el ícono del menú
import { useSidebarContext } from '../../context/sidebarContext'; // Importa el contexto del sidebar

// Componente funcional que representa la barra de navegación
const Navbar = () => {
  const { openSidebar } = useSidebarContext(); // Extrae la función para abrir el sidebar del contexto
  const [scrolled, setScrolled] = useState(false); // Estado para gestionar si se ha desplazado la página

  // Función que maneja el evento de desplazamiento
  const handleScroll = () => {
    const offset = window.scrollY; // Obtiene la posición vertical del desplazamiento
    if (offset > 60) { // Si el desplazamiento es mayor a 60px
      setScrolled(true); // Cambia el estado a true
    } else {
      setScrolled(false); // Cambia el estado a false
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Agrega un evento de desplazamiento al cargar el componente

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <nav className={`navbar bg-orange flex align-center ${scrolled ? 'scrolled' : ""}`}>
      <div className='container w-100'>
        <div className='navbar-content text-white'>
          <div className='brand-and-toggler flex align-center justify-between'>
            <Link to="/" className='navbar-brand fw-3 fs-22 flex align-center'>
              <MdFoodBank /> {/* Icono de banco de alimentos */}
              <span className='navbar-brand-text fw-7'>FastEat.</span> {/* Nombre de la marca */}
            </Link>
            <div className='navbar-btns flex align-center'>
              <button type="button" className='navbar-show-btn text-white' onClick={() => openSidebar()}>
                <IoMdMenu size={27} /> {/* Icono de menú para abrir el sidebar */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar; // Exporta el componente para su uso en otras partes de la aplicación
