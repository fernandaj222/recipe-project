import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RecipeDetailPage } from './recipe-detail.page';

import { RecipeDetailPageRoutingModule } from './recipe-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeDetailPageRoutingModule
  ],
  declarations: [RecipeDetailPage]
})
export class RecipeDetailPageModule {}
