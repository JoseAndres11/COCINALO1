import React, { useState } from 'react'; // Importa React y useState
import "./Header.scss"; // Importa los estilos del encabezado
import { BsSearch } from "react-icons/bs"; // Importa el ícono de búsqueda
import { useMealContext } from '../../context/mealContext'; // Importa el contexto de las comidas
import { useNavigate } from 'react-router-dom'; // Importa el hook para navegar entre rutas
import { startFetchMealsBySearch } from '../../actions/mealsActions'; // Importa la acción para buscar comidas

// Componente funcional que representa el formulario de búsqueda
const SearchForm = () => {
  const navigate = useNavigate(); // Inicializa el hook de navegación
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const [errorMsg, setErrorMsg] = useState(""); // Estado para mensajes de error
  const { dispatch, meals } = useMealContext(); // Extrae dispatch y comidas del contexto

  // Maneja el cambio en el input de búsqueda
  const handleSearchTerm = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    // Valida el término de búsqueda
    if ((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0) {
      setSearchTerm(e.target.value); // Actualiza el estado con el término de búsqueda
      setErrorMsg(""); // Resetea el mensaje de error
    } else {
      setErrorMsg("Invalid search term ..."); // Establece un mensaje de error si el término es inválido
    }
  }

  // Maneja el resultado de la búsqueda al enviar el formulario
  const handleSearchResult = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    navigate("/"); // Navega a la página principal
    startFetchMealsBySearch(dispatch, searchTerm); // Inicia la búsqueda de comidas utilizando el término de búsqueda
  }

  return (
    <form className='search-form flex align-center' onSubmit={(e) => handleSearchResult(e)}>
      <input
        type="text"
        className='form-control-input text-dark-gray fs-15'
        placeholder='Search recipes here ...' // Placeholder para el input
        onChange={(e) => handleSearchTerm(e)} // Maneja el cambio en el input
      />
      <button
        type="submit"
        className='form-submit-btn text-white text-uppercase fs-14'
      >
        <BsSearch className='btn-icon' size={20} /> {/* Ícono de búsqueda */}
      </button>
    </form>
  )
}

export default SearchForm; // Exporta el componente para su uso en otras partes de la aplicación
