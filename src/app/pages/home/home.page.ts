import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeItem } from 'src/app/components/recipe-item/recipe-item';
import { RecipeDataService } from 'src/app/recipe-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recipes!: RecipeItem[];
  originalRecipes!: RecipeItem[];

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly recipeDataService: RecipeDataService
  ) {
    this.recipeDataService.getAllRecipes().subscribe((data: any) => {
      this.originalRecipes = data.recipes;
      this.recipes = this.originalRecipes;
    });
  }

  onRecipeClicked(args: RecipeItem) {
    this.router.navigate(['recipe', args.id], {
      relativeTo: this.route
    });
  }

  onSearchRecipes(event: any) {
    const searchValue = event.detail.value.toLocaleLowerCase();
    if (searchValue.trim() === '') {
      // Si el campo de búsqueda está vacío, mostramos todas las recetas
      this.recipes = this.originalRecipes;
    } else {
      // Filtramos las recetas basándonos en el valor de búsqueda
      this.recipes = this.originalRecipes.filter(r => r.name.toLocaleLowerCase().includes(searchValue));
    }
  }
}
