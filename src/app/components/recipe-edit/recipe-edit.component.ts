import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent {
  recipeId: number = 0;
  recipeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    instructions: new FormControl('', Validators.required),
    ingredients: new FormControl('', Validators.required),
    prepTime: new FormControl(0, [Validators.required, Validators.min(1)]),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.recipeId = +params['id'];
      this.loadRecipe();
    });
  }

  loadRecipe() {
    const recipe = this.recipeService.getRecipeById(this.recipeId);
    if (recipe) {
      this.recipeForm.patchValue({
        name: recipe.name,
        instructions: recipe.instructions,
        ingredients: recipe.ingredients.join(', '),
        prepTime: recipe.prepTime,
      });
    }
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const formValue = this.recipeForm.value;
      const updatedRecipe: Recipe = {
        id: this.recipeId,
        name: formValue.name as string,
        instructions: formValue.instructions as string,
        ingredients: formValue.ingredients!
          .split(',')
          .map((item: string) => item.trim()),
        prepTime: formValue.prepTime as number,
      };
      this.recipeService.editRecipe(updatedRecipe);
      this.router.navigate(['/recipes']);
    }
    else {
      console.log(this.recipeForm.errors);
    }
  }
}
