import React from 'react';
import "./HomePage.scss";
import { useMealContext } from '../../context/mealContext';
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/Meal/MealList";

const HomePage = () => {
  const { categories, meals, categoryLoading, mealsLoading } = useMealContext();

  return (
    <main className='main-content'>
      {/* Carga de comidas */}
      {mealsLoading ? (
        <Loader />
      ) : meals === null ? (
        <NotFound />
      ) : meals.length > 0 ? (
        <MealList meals={meals} />
      ) : (
        <p>No meals found.</p> // Mensaje opcional si no hay comidas
      )}

      {/* Carga de categorías */}
      {categoryLoading ? (
        <Loader />
      ) : (
        <CategoryList categories={categories} />
      )}
    </main>
  );
}

export default HomePage;
