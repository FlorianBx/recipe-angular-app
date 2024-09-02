import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  recipeId: number = 0;
  recipe: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.recipeId = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.recipeId);
    });
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['/recipes']);
  }

  editRecipe() {
    this.router.navigate(['/recipe-edit', this.recipeId]);
  }

  goBack() {
    this.router.navigate(['/recipes']);
  }
}
