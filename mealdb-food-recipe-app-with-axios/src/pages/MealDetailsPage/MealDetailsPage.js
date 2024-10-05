import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./MealDetailsPage.scss";
import CategoryList from '../../components/Category/CategoryList';
import MealSingle from "../../components/Meal/MealSingle";
import { useMealContext } from '../../context/mealContext';
import { startFetchSingleMeal } from '../../actions/mealsActions';
import Loader from '../../components/Loader/Loader';

/**
 * MealDetailsPage Component
 * 
 * Este componente se encarga de mostrar los detalles de una comida seleccionada.
 * Utiliza el contexto de comidas para obtener los datos de la comida y las categorías.
 * El componente carga los detalles de la comida cuando se monta, basándose en el ID 
 * proporcionado en la URL.
 * 
 * @component
 * @returns {JSX.Element} Componente de detalles de la comida.
 */
const MealDetailsPage = () => {
  // Obtiene el ID de la comida de los parámetros de la URL
  const { id } = useParams();

  // Obtiene el contexto de comidas, incluyendo categorías, estado de carga y la comida seleccionada
  const { categories, dispatch, meal, categoryLoading, mealLoading } = useMealContext();

  // Efecto que se ejecuta al montar el componente o cuando el ID cambia
  useEffect(() => {
    // Llama a la acción para obtener los detalles de la comida basada en el ID
    startFetchSingleMeal(dispatch, id);
  }, [id, dispatch]);

  // Desestructuración de los datos de la comida
  const mealData = meal?.[0] || {};

  // Obtiene los ingredientes de la comida
  const ingredientsArr = Object.keys(mealData)
    .filter(key => key.includes('strIngredient') && mealData[key])
    .map(key => mealData[key]);

  // Obtiene las medidas de los ingredientes
  const measuresArr = Object.keys(mealData)
    .filter(key => key.includes('strMeasure') && mealData[key]?.length > 1)
    .map(key => mealData[key]);

  // Crea un objeto con la información de la comida
  const singleMeal = {
    id: mealData.idMeal,
    title: mealData.strMeal,
    category: mealData.strCategory,
    area: mealData.strArea,
    thumbnail: mealData.strMealThumb,
    instructions: mealData.strInstructions,
    source: mealData.strSource,
    tags: mealData.strTags,
    youtube: mealData.strYoutube,
    ingredients: ingredientsArr,
    measures: measuresArr
  };

  return (
    <main className='main-content bg-whitesmoke'>
      {mealLoading ? <Loader /> : <MealSingle meal={singleMeal} />}
      {!mealLoading && categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  )
}

export default MealDetailsPage;
