import React from 'react'; // Importa React
import { useSidebarContext } from '../../context/sidebarContext'; // Importa el contexto del sidebar
import { ImCancelCircle } from "react-icons/im"; // Importa un ícono para cerrar el sidebar
import "./Sidebar.scss"; // Importa los estilos del componente Sidebar
import { Link } from "react-router-dom"; // Importa Link para la navegación
import { useMealContext } from '../../context/mealContext'; // Importa el contexto de comidas

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useSidebarContext(); // Extrae el estado del sidebar y la función para cerrarlo
    const { categories } = useMealContext(); // Extrae las categorías del contexto de comidas

    return (
        <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ""}`}> {/* Aplicación de clase según el estado del sidebar */}
            <button type="button" className='navbar-hide-btn' onClick={() => closeSidebar()}> {/* Botón para cerrar el sidebar */}
                <ImCancelCircle size={24} /> {/* Ícono de cerrar */}
            </button>

            <div className='side-content'> {/* Contenedor de contenido del sidebar */}
                <ul className='side-nav'> {/* Lista de navegación */}
                    {
                        categories.map(category => ( // Mapea sobre las categorías
                            <li className='side-item' key={category.idCategory}> {/* Elemento de lista para cada categoría */}
                                <Link to={`/meal/category/${category.strCategory}`} className='side-link ls-1 fs-13' onClick={() => closeSidebar()}> {/* Enlace a la categoría */}
                                    {category.strCategory} {/* Nombre de la categoría */}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar; // Exporta el componente para su uso en otras partes de la aplicación
