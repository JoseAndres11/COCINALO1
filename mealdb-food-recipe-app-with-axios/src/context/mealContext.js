import React, { createContext, useContext, useEffect, useReducer } from "react"; // Importa React y hooks
import { mealReducer } from "../reducers/mealReducer"; // Importa el reductor de comidas
import { startFetchCategories } from "../actions/mealsActions"; // Importa la acción para obtener categorías

// Estado inicial para el contexto de comidas
const initialState = {
    categories: [], // Categorías de comidas
    categoryLoading: false, // Estado de carga de categorías
    categoryError: false, // Error en la carga de categorías
    categoryMeals: [], // Comidas de una categoría específica
    categoryMealsLoading: false, // Estado de carga de comidas por categoría
    categoryMealsError: false, // Error en la carga de comidas por categoría
    meals: [], // Todas las comidas
    mealsLoading: false, // Estado de carga de comidas
    mealsError: false, // Error en la carga de comidas
    meal: [], // Detalle de una comida específica
    mealLoading: false, // Estado de carga del detalle de la comida
    mealError: false // Error en la carga del detalle de la comida
}

// Crear el contexto
const MealContext = createContext({});

// Proveedor del contexto de comidas
export const MealProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mealReducer, initialState); // Usar el reductor para manejar el estado

    // Efecto que se ejecuta al montar el componente para obtener categorías
    useEffect(() => {
        startFetchCategories(dispatch); // Llamar a la acción para obtener categorías
    }, []);

    return (
        <MealContext.Provider value={{
            ...state, // Proporcionar el estado actual
            dispatch, // Proporcionar la función dispatch
            startFetchCategories // Proporcionar la acción para obtener categorías
        }}>
            {children} {/* Renderizar los hijos del proveedor */}
        </MealContext.Provider>
    )
}

// Hook para usar el contexto de comidas en otros componentes
export const useMealContext = () => {
    return useContext(MealContext); // Retornar el contexto
}
