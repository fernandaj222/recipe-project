// Importa el módulo HttpClient desde Angular para realizar solicitudes HTTP
import { HttpClient } from '@angular/common/http';
// Importa el decorador Injectable para que la clase pueda ser inyectada en otros componentes o servicios
import { Injectable } from '@angular/core';

// Define el servicio RecipeDataService como un servicio inyectable
@Injectable({
  providedIn: 'root' // Este servicio estará disponible en toda la aplicación
})
export class RecipeDataService {
  // URL para obtener todas las recetas con un límite de 0 (sin resultados)
  private apiAll = 'https://dummyjson.com/recipes?limit=0';
  // URL base para las recetas, usada para obtener recetas individuales
  private apiBase = 'https://dummyjson.com/recipes';

  // Constructor que inyecta HttpClient para poder realizar solicitudes HTTP
  constructor(private readonly http: HttpClient) {}

  // Método para obtener todas las recetas
  getAllRecipes() {
    // Realiza una solicitud GET a la API para obtener todas las recetas
    return this.http.get(this.apiAll);
  }

  // Método para obtener una receta específica por su ID
  getRecipeById(id: number) {
    // Construye la URL para obtener la receta específica usando el ID proporcionado
    const api = this.apiBase + '/' + id;
    // Realiza una solicitud GET a la API para obtener la receta por ID
    return this.http.get(api);
  }
}
