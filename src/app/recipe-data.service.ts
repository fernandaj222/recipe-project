import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {
  private apiAll = 'https://dummyjson.com/recipes?limit=0';
  private apiBase = 'https://dummyjson.com/recipes';

  constructor(private readonly http: HttpClient) {}

  getAllRecipes() {
    return this.http.get(this.apiAll);
  }

  getRecipeById(id: number) {
    const api = this.apiBase + '/' + id;
    return this.http.get(api);
  }
}
