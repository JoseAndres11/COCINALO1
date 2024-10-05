import React from 'react'; // Importa React
import "./Loader.scss"; // Importa los estilos del Loader
import { loader } from "../../utils/images"; // Importa la imagen del loader

// Componente funcional que representa un loader de carga
const Loader = () => {
  return (
    <div className='loader my-5'> {/* Contenedor del loader con margen vertical */}
      <div className='container flex align-center justify-center'> {/* Contenedor interno con flexbox para centrar */}
        <img src={loader} alt="" /> {/* Imagen del loader; el alt está vacío por ser decorativa */}
      </div>
    </div>
  )
}

export default Loader; // Exporta el componente para su uso en otras partes de la aplicación
