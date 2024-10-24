import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailPage
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
