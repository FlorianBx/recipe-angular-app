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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
