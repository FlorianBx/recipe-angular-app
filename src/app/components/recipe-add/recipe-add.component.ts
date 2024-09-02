import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-add.component.html',
  styleUrl: './recipe-add.component.css'
})
export class RecipeAddComponent {

  constructor(private recipeService: RecipeService, private router: Router) { }

  recipeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    instructions: new FormControl('', Validators.required),
    ingredients: new FormControl([''], Validators.required),
    prepTime: new FormControl('', Validators.required)
  });

  onSubmit() {
    const recipe: Recipe = {
      name: this.recipeForm.value.name as string,
      instructions: this.recipeForm.value.instructions as string,
      ingredients: this.recipeForm.value.ingredients as string[],
      prepTime: Number(this.recipeForm.value.prepTime)
    }
    this.recipeService.addRecipe(recipe);
    this.router.navigate(['/recipes']);
  }
}
