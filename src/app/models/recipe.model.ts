export interface Recipe {
  id: number;
  name: string;
  instructions: string;
  ingredients: string[];
  prepTime: number;
  imagePath?: string;
}
