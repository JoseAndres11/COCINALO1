import React, { useEffect } from 'react'; // Importa React y el hook useEffect
import "./CategoryPage.scss"; // Importa el archivo de estilos
import { useMealContext } from '../../context/mealContext'; // Importa el contexto de comidas
import MealList from '../../components/Meal/MealList'; // Importa el componente de lista de comidas
import { useParams } from 'react-router-dom'; // Importa useParams para obtener parámetros de la URL
import { startFetchMealByCategory } from '../../actions/mealsActions'; // Importa la acción para obtener comidas por categoría

const CategoryPage = () => {
  const { name } = useParams(); // Obtiene el nombre de la categoría de los parámetros de la URL
  const { categoryMeals, dispatch, categories } = useMealContext(); // Obtiene datos del contexto de comidas
  let catDescription = ""; // Variable para almacenar la descripción de la categoría

  // Busca la descripción de la categoría basada en el nombre
  if (categories) {
    categories.forEach(category => {
      if (category?.strCategory === name) catDescription = category?.strCategoryDescription; // Asigna la descripción si hay coincidencia
    });
  }

  // Efecto para obtener comidas por categoría al montar el componente o al cambiar el nombre de la categoría
  useEffect(() => {
    startFetchMealByCategory(dispatch, name); // Despacha la acción para obtener las comidas de la categoría
  }, [name, dispatch]); // Dependencias del efecto

  return (
    <main className='main-content py-5'> {/* Contenedor principal */}
      <div className='container'>
        <div className='cat-description px-4 py-4'>
          <h2 className='text-orange fw-8'>{name}</h2> {/* Título de la categoría */}
          <p className='fs-18 op-07'>{catDescription}</p> {/* Descripción de la categoría */}
        </div>
      </div>
      {
        (categoryMeals?.length) ? <MealList meals={categoryMeals} /> : null // Si hay comidas en la categoría, se muestran
      }
    </main>
  )
}

export default CategoryPage; // Exporta el componente
