import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[] = [
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

  generateId() {
    return this.recipes.length + 1;
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipeById(id: number) {
    return this.recipes.find((recipe) => recipe.id === id);
  }

  addRecipe(recipe: Recipe) {
    const ingredients = recipe.ingredients.toString().split(',');
    recipe.ingredients = ingredients;
    this.recipes.push(recipe);
    console.log(this.recipes);
  }

  editRecipe(recipe: Recipe) {
    const index = this.recipes.findIndex((r) => r.id === recipe.id);
    this.recipes[index] = recipe;
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
  }
}
