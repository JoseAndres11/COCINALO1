import React from 'react';
import "./Header.scss"; // Importa los estilos del encabezado
import Navbar from "./Navbar"; // Importa el componente Navbar
import SearchForm from "./SearchForm"; // Importa el componente SearchForm

// Componente funcional que representa el encabezado de la aplicación
const Header = () => {
  return (
    <header className='header'> {/* Contenedor principal del encabezado */}
      <Navbar /> {/* Componente de navegación */}
      
      <div className='header-content flex align-center justify-center flex-column text-center'>
        <SearchForm /> {/* Formulario de búsqueda */}
        <h1 className='text-white header-title ls-2'>What are your favorite cuisines?</h1> {/* Título principal */}
        <p className='text-uppercase text-white my-3 ls-1'>personalize your experience</p> {/* Subtítulo */}
      </div>
    </header>
  )
}

export default Header; // Exporta el componente para su uso en otras partes de la aplicación
