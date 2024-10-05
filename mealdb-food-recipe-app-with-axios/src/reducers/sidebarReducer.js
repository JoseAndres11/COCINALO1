import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from "../actions/actions";

/**
 * sidebarReducer
 * 
 * Este reducer maneja el estado de la barra lateral (sidebar) en la aplicación.
 * Gestiona las acciones para abrir y cerrar la barra lateral, así como su estado actual.
 * 
 * @param {Object} state - El estado actual de la barra lateral.
 * @param {Object} action - La acción a ser procesada.
 * @returns {Object} El nuevo estado de la barra lateral después de aplicar la acción.
 */
const sidebarReducer = (state, action) => {
    switch(action.type){
        // Abre la barra lateral
        case OPEN_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: true
            }
        // Cierra la barra lateral
        case CLOSE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: false
            }
        // Devuelve el estado actual si la acción no coincide con ninguna
        default: 
            return state;
    }
}

export default sidebarReducer;
