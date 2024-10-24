// Importa NgModule desde Angular para definir un módulo
import { NgModule } from '@angular/core';
// Importa RouterModule y Routes para manejar la configuración de rutas
import { RouterModule, Routes } from '@angular/router';
// Importa el componente HomePage
import { HomePage } from './home.page';
// Importa el componente RecipeDetailPage para la ruta de detalles de recetas
import { RecipeDetailPage } from '../recipe-detail/recipe-detail.page';

// Define las rutas de la aplicación como un array de objetos
const routes: Routes = [
  {
    path: '', // Ruta raíz
    component: HomePage, // Componente que se mostrará en la ruta raíz
  },
  {
    path: 'recipe/:id', // Ruta para los detalles de una receta, donde :id es un parámetro dinámico
    component: RecipeDetailPage // Componente que se mostrará para la ruta de detalles de receta
  },
  {
    path: '**', // Ruta comodín para manejar rutas no definidas
    redirectTo: '', // Redirige a la ruta raíz
    pathMatch: 'full' // Asegura que la redirección ocurra solo si la ruta coincide completamente
  }
];

// Define un módulo de enrutamiento para el HomePage
@NgModule({
  imports: [RouterModule.forChild(routes)], // Importa RouterModule y define las rutas
  exports: [RouterModule] // Exporta RouterModule para que esté disponible en otros módulos
})
export class HomePageRoutingModule {}
