import React, { createContext, useContext, useReducer } from "react"; // Importa React y hooks
import reducer from "../reducers/sidebarReducer"; // Importa el reductor de la barra lateral
import {
    OPEN_SIDEBAR, // Acción para abrir la barra lateral
    CLOSE_SIDEBAR // Acción para cerrar la barra lateral
} from "../actions/actions"; // Importa las acciones

// Estado inicial para el contexto de la barra lateral
const initialState = {
    isSidebarOpen: false // Indica si la barra lateral está abierta
}

// Crear el contexto
const SidebarContext = createContext({});

// Proveedor del contexto de la barra lateral
export const SidebarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState); // Usar el reductor para manejar el estado

    // Función para abrir la barra lateral
    const openSidebar = () => {
        dispatch({ type: OPEN_SIDEBAR }); // Despachar la acción de abrir
    }

    // Función para cerrar la barra lateral
    const closeSidebar = () => {
        dispatch({ type: CLOSE_SIDEBAR }); // Despachar la acción de cerrar
    }

    return (
        <SidebarContext.Provider value={{
            ...state, // Proporcionar el estado actual
            openSidebar, // Proporcionar la función para abrir la barra lateral
            closeSidebar // Proporcionar la función para cerrar la barra lateral
        }}>
            {children} {/* Renderizar los hijos del proveedor */}
        </SidebarContext.Provider>
    )
}

// Hook para usar el contexto de la barra lateral en otros componentes
export const useSidebarContext = () => {
    return useContext(SidebarContext); // Retornar el contexto
}
