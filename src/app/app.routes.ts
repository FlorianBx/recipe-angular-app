import { Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipeAddComponent } from './components/recipe-add/recipe-add.component';

export const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipe/add', component: RecipeAddComponent },
  { path: 'recipe-detail/:id', component: RecipeDetailComponent },
  { path: 'recipe-edit/:id', component: RecipeEditComponent }
];
