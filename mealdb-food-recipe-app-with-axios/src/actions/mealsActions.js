import axios from "../api/axios"; // Importa la instancia de Axios para realizar solicitudes HTTP
import {

    // Acciones para indicar
    FETCH_CATEGORY_BEGIN, //  solicitud de categorías ha comenzado
    FETCH_CATEGORY_ERROR, //  ocurrio un error al solicitar categorías
    FETCH_CATEGORY_MEALS_BEGIN, //  solicitud de comidas de una categoría ha comenzado
    FETCH_CATEGORY_MEALS_ERROR, //  ocurrio un error al solicitar comidas de una categoría
    FETCH_CATEGORY_MEALS_SUCCESS, // Acción para indicar que la solicitud de comidas de una categoría se ha realizado con éxito
    FETCH_CATEGORY_SUCCESS, //  solicitud de categorías se ha realizado con éxito
    FETCH_MEALS_BEGIN, //  solicitud de comidas ha comenzado
    FETCH_MEALS_ERROR, //  ocurrio un error al solicitar comidas
    FETCH_MEALS_SUCCESS, // A solicitud de comidas se ha realizado con éxito
    FETCH_SINGLE_MEAL_BEGIN, //  solicitud de una comida individual ha comenzado
    FETCH_SINGLE_MEAL_ERROR, //  ocurrio un error al solicitar una comida individual
    FETCH_SINGLE_MEAL_SUCCESS //  solicitud de una comida individual se ha realizado con éxito
} from "./actions";

// Importa las URL para realizar las solicitudes a la API
import { CATEGORIES_URL, MEAL_CATEGORIES_URL, MEAL_SINGLE_URL, SEARCH_URL } from "../utils/constants";

/**
 Función para iniciar la solicitud de categorías.
 * @param {Function} dispatch 
 */
export const startFetchCategories = async(dispatch) => {
    try {
        dispatch({ type: FETCH_CATEGORY_BEGIN }); // Indica que la solicitud ha comenzado
        const response = await axios.get(`${CATEGORIES_URL}`); // Realiza la solicitud a la API
        dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: response.data.categories }); // Indica que la solicitud fue exitosa
    } catch (error) {
        dispatch({ type: FETCH_CATEGORY_ERROR, payload: error.message }); // Indica que ocurrió un error
    }
}

/**
   Función para iniciar la solicitud de una comida individual.
   @param {Function} dispatch - Función para enviar acciones al reducer.
   @param {string} id - ID de la comida que se desea obtener.
 */
export const startFetchSingleMeal = async(dispatch, id) => {
    try {
        dispatch({ type: FETCH_SINGLE_MEAL_BEGIN }); // Indica que la solicitud ha comenzado
        const response = await axios.get(`${MEAL_SINGLE_URL}${id}`); // Realiza la solicitud a la API
        dispatch({ type: FETCH_SINGLE_MEAL_SUCCESS, payload: response.data.meals }); // Indica que la solicitud fue exitosa
    } catch (error) {
        dispatch({ type: FETCH_SINGLE_MEAL_ERROR, payload: error.message }); // Indica que ocurrió un error
    }
}

/**
 * Función para iniciar la solicitud de comidas de una categoría específica.
 * @param {Function} dispatch - Función para enviar acciones al reducer.
 * @param {string} category - Nombre de la categoría de la cual se desean obtener las comidas.
 */
export const startFetchMealByCategory = async(dispatch, category) => {
    try {
        dispatch({ type: FETCH_CATEGORY_MEALS_BEGIN }); // Indica que la solicitud ha comenzado
        const response = await axios.get(`${MEAL_CATEGORIES_URL}${category}`); // Realiza la solicitud a la API
        dispatch({ type: FETCH_CATEGORY_MEALS_SUCCESS, payload: response.data.meals }); // Indica que la solicitud fue exitosa
    } catch (error) {
        dispatch({ type: FETCH_CATEGORY_MEALS_ERROR, payload: error.message }); // Indica que ocurrió un error
    }
}

/**
 * //Función para iniciar la búsqueda de comidas por término de búsqueda.
 * @param {Function} dispatch - Función para enviar acciones al reducer.
 * @param {string} searchTerm - Término de búsqueda para encontrar comidas.
 */
export const startFetchMealsBySearch = async(dispatch, searchTerm) => {
    try {
        dispatch({ type: FETCH_MEALS_BEGIN }); // Indica que la solicitud ha comenzado
        const response = await axios.get(`${SEARCH_URL}${searchTerm}`); // Realiza la solicitud a la API
        dispatch({ type: FETCH_MEALS_SUCCESS, payload: response.data.meals }); // Indica que la solicitud fue exitosa
    } catch (error) {
        dispatch({ type: FETCH_MEALS_ERROR, payload: error.message }); // Indica que ocurrió un error
    }
}
