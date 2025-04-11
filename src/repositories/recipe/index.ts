import type { Recipe } from "../../recipe";

export interface RecipeRepository {
  find(id: number): Promise<Recipe | undefined>;
  create(payload: Recipe): Promise<Recipe>;
}
