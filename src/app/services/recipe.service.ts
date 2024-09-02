import { Injectable, signal } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes = signal<Recipe[]>(this.loadRecipes());

  private loadRecipes(): Recipe[] {
    const savedRecipes = localStorage.getItem('recipes');
    return savedRecipes
      ? JSON.parse(savedRecipes)
      : [
          {
            id: 1,
            name: 'Pizza',
            instructions: 'lorem ipsum dolor sit amet consectetur',
            ingredients: ['Tomato', 'Mozzarella', 'Cheese'],
            prepTime: 10,
          },
          {
            id: 2,
            name: 'Pasta',
            instructions: 'lorem ipsum dolor sit amet consectetur',
            ingredients: ['Tomato', 'Mozzarella', 'Cheese'],
            prepTime: 10,
          },
          {
            id: 3,
            name: 'Salad',
            instructions: 'lorem ipsum dolor sit amet consectetur',
            ingredients: ['Tomato', 'Mozzarella', 'Cheese'],
            prepTime: 10,
          },
        ];
  }

  private generateId() {
    return this.recipes.length + 1;
  }

  private saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(this.recipes()));
  }

  getRecipes() {
    const savedRecipes = localStorage.getItem('recipes');
    if (savedRecipes) {
      this.recipes.set(JSON.parse(savedRecipes));
    }
    return this.recipes;
  }

  getRecipeById(id: number) {
    return this.recipes().find((recipe: Recipe) => recipe.id === id);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.update((recipes) => {
      const newRecipe = {
        ...recipe,
        id: this.generateId(),
        ingredients: recipe.ingredients
          .toString()
          .split(',')
          .map((ingredient) => ingredient.trim()),
      };
      return [...recipes, newRecipe];
    });
    this.saveRecipes();
  }

  editRecipe(recipe: Recipe) {
    const index = this.recipes().findIndex((r) => r.id === recipe.id);
    this.recipes()[index] = recipe;
    this.saveRecipes();
  }

  deleteRecipe(id: number) {
    this.recipes.update((recipes) =>
      recipes.filter((recipe) => recipe.id !== id),
    );
    this.saveRecipes();
  }
}
