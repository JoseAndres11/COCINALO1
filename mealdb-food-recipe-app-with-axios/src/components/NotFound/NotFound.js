import React from 'react'; // Importa React
import "./NotFound.scss"; // Importa los estilos del componente NotFound

// Componente funcional que muestra un mensaje de error cuando no se encuentra comida
const NotFound = () => {
  return (
    <div className='not-found my-5'> {/* Contenedor principal con margen vertical */}
      <div className='container flex align-center justify-center'> {/* Contenedor interno que alinea el contenido */}
        No any food found. {/* Mensaje que se muestra cuando no se encuentra comida */}
      </div>
    </div>
  )
}

export default NotFound; // Exporta el componente para su uso en otras partes de la aplicación
