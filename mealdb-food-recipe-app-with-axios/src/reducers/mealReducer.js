import {
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_ERROR,
    FETCH_CATEGORY_MEALS_BEGIN,
    FETCH_CATEGORY_MEALS_ERROR,
    FETCH_CATEGORY_MEALS_SUCCESS,
    FETCH_CATEGORY_SUCCESS,
    FETCH_MEALS_BEGIN,
    FETCH_MEALS_ERROR,
    FETCH_MEALS_SUCCESS,
    FETCH_SINGLE_MEAL_BEGIN,
    FETCH_SINGLE_MEAL_ERROR,
    FETCH_SINGLE_MEAL_SUCCESS
} from "../actions/actions";

/**
 * mealReducer
 * 
 * Este reducer maneja el estado relacionado con las comidas y categorías en la aplicación.
 * Gestiona las acciones para cargar categorías, comidas y detalles de comidas individuales,
 * así como los estados de carga y error.
 * 
 * @param {Object} state - El estado actual de la aplicación.
 * @param {Object} action - La acción a ser procesada.
 * @returns {Object} El nuevo estado de la aplicación después de aplicar la acción.
 */
export const mealReducer = (state, action) => {
    switch(action.type){
        // Inicia la carga de categorías
        case FETCH_CATEGORY_BEGIN:
            return {
                ...state,
                categoryLoading: true
            }
        // Carga exitosa de categorías
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                categoryLoading: false,
                categories: action.payload
            }
        // Error al cargar categorías
        case FETCH_CATEGORY_ERROR: 
            return {
                ...state,
                categoryLoading: false,
                categoryError: true
            }
        // Inicia la carga de comidas
        case FETCH_MEALS_BEGIN:
            return {
                ...state,
                mealsLoading: true
            }
        // Carga exitosa de comidas
        case FETCH_MEALS_SUCCESS:
            return {
                ...state,
                mealsLoading: false,
                meals: action.payload
            }
        // Error al cargar comidas
        case FETCH_MEALS_ERROR:
            return {
                ...state,
                mealsLoading: false,
                mealsError: true
            }
        // Inicia la carga de detalles de una comida
        case FETCH_SINGLE_MEAL_BEGIN:
            return {
                ...state,
                mealLoading: true
            }
        // Carga exitosa de detalles de una comida
        case FETCH_SINGLE_MEAL_SUCCESS:
            return {
                ...state,
                mealLoading: false,
                meal: action.payload
            }
        // Error al cargar detalles de una comida
        case FETCH_SINGLE_MEAL_ERROR:
            return {
                ...state,
                mealLoading: false,
                mealError: true
            }
        // Inicia la carga de comidas por categoría
        case FETCH_CATEGORY_MEALS_BEGIN:
            return {
                ...state,
                categoryMealsLoading: true
            }
        // Carga exitosa de comidas por categoría
        case FETCH_CATEGORY_MEALS_SUCCESS:
            return {
                ...state,
                categoryMealsLoading: false,
                categoryMeals: action.payload
            }
        // Error al cargar comidas por categoría
        case FETCH_CATEGORY_MEALS_ERROR:
            return {
                ...state,
                categoryMealsLoading: false,
                categoryMealsError: true
            }
        // Devuelve el estado actual si la acción no coincide con ninguna
        default: 
            return state;
    }
}
