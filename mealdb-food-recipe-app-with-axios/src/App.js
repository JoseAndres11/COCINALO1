import './App.scss';
// react router dom
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// pages
import { Home, MealDetails, Error, Category } from "./pages/index";
// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

/**
 * App Component
 * 
 * Este componente es el punto de entrada principal de la aplicación.
 * Utiliza React Router para gestionar la navegación entre diferentes páginas.
 * 
 * Estructura:
 * - BrowserRouter: Proporciona el contexto de enrutamiento para la aplicación.
 * - Header: Componente que representa el encabezado de la aplicación.
 * - Sidebar: Componente que representa la barra lateral de navegación.
 * - Routes: Componente que agrupa las rutas de la aplicación.
 * - Route: Define las rutas específicas y los componentes que se renderizarán para cada ruta.
 * 
 * Rutas:
 * - "/" (Home): Renderiza el componente `Home`.
 * - "/meal/:id" (MealDetails): Renderiza el componente `MealDetails`, donde `:id` es el parámetro dinámico para identificar l
sadasdasdsad