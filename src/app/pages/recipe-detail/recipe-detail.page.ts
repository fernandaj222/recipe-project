// Importa el decorador Component para definir un componente Angular
import { Component } from '@angular/core';
// Importa ActivatedRoute y Router para manejar la navegación y rutas
import { ActivatedRoute, Router } from '@angular/router';
// Importa la interfaz RecipeItem para tipar las recetas
import { RecipeItem } from 'src/app/components/recipe-item/recipe-item';
// Importa el servicio RecipeDataService para obtener datos de recetas
import { RecipeDataService } from 'src/app/recipe-data.service';

// Define el componente RecipeDetailPage
@Component({
  selector: 'app-recipe-detail', // Selector del componente
  templateUrl: './recipe-detail.page.html', // Ruta del archivo HTML del componente
  styleUrls: ['./recipe-detail.page.scss'], // Ruta del archivo de estilos SCSS
})
export class RecipeDetailPage {
  // Propiedad para almacenar la receta
  recipe!: RecipeItem;

  // Constructor que inyecta ActivatedRoute y RecipeDataService
  constructor(
    private readonly route: ActivatedRoute, // Para acceder a los parámetros de la ruta
    private readonly recipeDataService: RecipeDataService // Servicio para obtener datos de recetas
  ) {
    // Obtiene el ID de la receta desde los parámetros de la ruta
    const id = this.route.snapshot.params['id'];
    // Llama al método getRecipeById del servicio para obtener la receta por ID
    this.recipeDataService.getRecipeById(id).subscribe((data: any) => {
      // Asigna la receta obtenida a la propiedad recipe
      this.recipe = data as RecipeItem;
    });
  }
}
