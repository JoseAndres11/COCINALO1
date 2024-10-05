import axios from 'axios'; // Importa la biblioteca Axios para realizar solicitudes HTTP

// Crea y exporta una instancia de Axios con una URL base predefinida
export default axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/' // URL base para las solicitudes a la API de TheMealDB
});
