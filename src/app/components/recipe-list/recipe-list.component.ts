import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes = this.recipeService.getRecipes();

  constructor(private recipeService: RecipeService) {}

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
  }
}
