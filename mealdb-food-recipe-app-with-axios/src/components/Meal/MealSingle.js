import React from 'react'; // Importa React
import "./Meal.scss"; // Importa los estilos del componente Meal
import { FaUtensilSpoon } from "react-icons/fa"; // Icono de utensilio
import { AiFillHome } from "react-icons/ai"; // Icono de inicio
import { Link } from "react-router-dom"; // Importa el componente Link para la navegación
import { BiChevronsRight } from "react-icons/bi"; // Icono de flecha derecha
import { AiOutlineCheckSquare } from 'react-icons/ai'; // Icono de cuadrado con marca

// Componente funcional que muestra los detalles de una comida
const MealSingle = ({ meal }) => {
  console.log(meal); // Muestra en consola la comida para depuración
  let tags = meal?.tags?.split(','); // Divide las etiquetas en un array
  console.log(meal); // Muestra de nuevo la comida para depuración
  let instructions = meal?.instructions?.split('\r\n'); // Divide las instrucciones en un array
  instructions = instructions?.filter(instruction => instruction.length > 1); // Filtra instrucciones vacías

  return (
    <div className='section-wrapper'> {/* Contenedor principal de la sección */}
      <div className='container'> {/* Contenedor interno */}
        <div className='breadcrumb bg-orange text-white'> {/* Miga de pan para navegación */}
          <ul className='flex align-center my-2'>
            <li className='breadcrumb-item'>
              <Link to="/" className='flex align-center'> {/* Enlace al inicio */}
                <AiFillHome size={22} />
              </Link>
            </li>
            <li className='flex align-center mx-1'>
              <BiChevronsRight size={23} /> {/* Icono de flecha derecha */}
            </li>
            <li className='breadcrumb-item flex'>
              <span to="" className='fs-15 fw-5 text-uppercase'>{meal?.title}</span> {/* Título de la comida */}
            </li>
          </ul>
        </div>

        <div className='sc-title'>Meal Details</div> {/* Título de la sección de detalles */}
        <section className='sc-details bg-white'> {/* Sección de detalles de la comida */}
          <div className='details-head grid'> {/* Encabezado de detalles */}
            <div className='details-img'> {/* Imagen de la comida */}
              <img src={meal?.thumbnail} alt="" className='img-cover' />
            </div>

            <div className='details-intro'> {/* Introducción de detalles */}
              <h3 className='title text-orange'>{meal?.title}</h3> {/* Título de la comida */}
              <div className='py-4'>
                <div className='category flex align-center'>
                  <span className='text-uppercase fw-8 ls-1 my-1'>category: &nbsp;</span>
                  <span className='text-uppercase ls-2'>{meal?.category}</span> {/* Categoría de la comida */}
                </div>

                <div className='source flex align-center'>
                  <span className='fw-7'>Source: &nbsp;</span>
                  <a href={meal.source}> {/* Enlace a la fuente de la comida */}
                    {meal.source ? (meal?.source).substring(0, 40) + "..." : "Not found"}
                  </a>
                </div>
              </div>

              <div className='tags flex align-start flex-wrap'> {/* Sección de etiquetas */}
                <h6 className='fs-16'>Tags:</h6>
                <ul className='flex align-center flex-wrap'>
                  {
                    tags?.map((tag, idx) => (<li key={idx} className="fs-14">{tag}</li>)) // Mapea y muestra las etiquetas
                  }
                </ul>
              </div>

              <div className='ingredients my-5 px-3 py-3'> {/* Sección de ingredientes */}
                <h6 className='fs-16 text-white'>Ingredients</h6>
                <ul className='grid'>
                  {
                    meal?.ingredients?.map((ingredient, idx) => (
                      <li key={idx} className="flex align-center">
                        <span className='li-dot'>{idx + 1}</span>
                        <span className='text-capitalize text-white fs-15'>{ingredient}</span> {/* Muestra cada ingrediente */}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className='details-body'> {/* Cuerpo de detalles */}
            <div className='measures my-4'> {/* Sección de medidas */}
              <h6 className='fs-16'>Measure:</h6>
              <ul className='grid'>
                {
                  meal?.measures?.map((measure, idx) => (
                    <li key={idx} className="fs-14 flex align-end">
                      <span className='li-icon fs-12 text-orange'>
                        <FaUtensilSpoon /> {/* Icono de utensilio */}
                      </span>
                      <span className='li-text fs-15 fw-6 op-09'>{measure}</span> {/* Muestra la medida */}
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className='instructions my-4'> {/* Sección de instrucciones */}
              <h6 className='fs-16'>Instructions:</h6>
              <ul className='grid'>
                {
                  instructions?.map((instruction, idx) => (
                    <li key={idx} className="fs-14">
                      <AiOutlineCheckSquare size={18} className="text-orange li-icon" /> {/* Icono de verificación */}
                      <span className='li-text fs-16 fw-5 op-09'>{instruction}</span> {/* Muestra cada instrucción */}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MealSingle; // Exporta el componente para su uso en otras partes de la aplicación
