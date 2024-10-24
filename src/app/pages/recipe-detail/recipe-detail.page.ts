import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeItem } from 'src/app/components/recipe-item/recipe-item';
import { RecipeDataService } from 'src/app/recipe-data.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage {
  recipe!: RecipeItem;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly recipeDataService: RecipeDataService
  ) {
    const id = this.route.snapshot.params['id'];
    this.recipeDataService.getRecipeById(id).subscribe((data: any) => {
      this.recipe = data as RecipeItem;
    });
  }
}
