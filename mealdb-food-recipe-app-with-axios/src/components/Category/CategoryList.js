import React from 'react';
import { Link } from 'react-router-dom';
import "./Category.scss";

// Componente que muestra una lista de categorías
const CategoryList = ({ categories }) => {
  return (
    <div className='section-wrapper bg-whitesmoke'>
      <div className='container'>
        <div className='sc-title'>categories</div> {/* Título de la sección */}
        
        {/* Sección que contiene la cuadrícula de categorías */}
        <section className='sc-category grid'>
          {
            // Mapea a través de las categorías y crea un enlace para cada una
            categories.map(category => {
              const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail } = category;

              return (
                // Enlace que lleva a la página de la categoría correspondiente
                <Link to={`/meal/category/${title}`} className="category-itm align-center justify-center" key={id}>
                  <div className='category-itm-img h-100 w-100 flex align-center justify-center'>
                    <img src={thumbnail} alt={title} /> {/* Imagen de la categoría */}
                    <div className='category-itm-title bg-orange'>
                      <h3 className='text-white fs-11 fw-6 ls-1 text-uppercase'>{title}</h3> {/* Título de la categoría */}
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

export default CategoryList;
