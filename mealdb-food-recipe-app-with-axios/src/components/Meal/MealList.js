import React from 'react'; // Importa React
import "./Meal.scss"; // Importa los estilos del componente Meal
import { Link } from 'react-router-dom'; // Importa el componente Link para la navegación

// Componente funcional que recibe una lista de comidas y las muestra
const MealList = ({ meals }) => {
  console.log(meals); // Muestra en consola la lista de comidas para depuración

  return (
    <div className='section-wrapper'> {/* Contenedor principal de la sección */}
      <div className='container'> {/* Contenedor interno */}
        <div className='sc-title'>meals</div> {/* Título de la sección */}
        <section className='sc-meal grid'> {/* Sección que contiene la cuadrícula de comidas */}
          {
            meals?.map(mealItem => { // Mapea sobre la lista de comidas
              // Desestructura la información de cada comida
              const { idMeal: id, strArea: area, strCategory: category, strMeal: meal, strMealThumb: thumbnail } = mealItem;

              return (
                <Link to={`/meal/${id}`} className="meal-itm align-center justify-center" key={id}> {/* Enlace a la página de detalles de la comida */}
                  <div className='meal-itm-img'> {/* Contenedor de la imagen de la comida */}
                    <img src={thumbnail} alt={meal} /> {/* Imagen de la comida con texto alternativo */}
                    <div className='meal-itm-cat bg-orange text-orange fw-6'>{category}</div> {/* Categoría de la comida */}
                  </div>

                  <div className='meal-itm-body'> {/* Contenedor del cuerpo de la comida */}
                    <div className='meal-itm-body-info flex flex-column'> {/* Contenedor de información de la comida */}
                      <div className='area fs-14 ls-1 fw-5'>{area}</div> {/* Área de la comida */}
                      <div className='meal fw-15 fw-7 op-09'>{meal}</div> {/* Nombre de la comida */}
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}

export default MealList; // Exporta el componente para su uso en otras partes de la aplicación
