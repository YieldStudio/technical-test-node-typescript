import type { RecipeRepository } from "../repositories/recipe";
import { PrismaRecipeRepository } from "../repositories/recipe.prisma.repository";
import { generateRandomId } from "../utils";
import type { Recipe } from "../recipe";

export type CreateRecipePayload = {
  title: string;
  ingredients: string[];
  prepTime: number;
  cookingTime: number;
};

export class CreateRecipeUseCase {
  private recipeRepository: RecipeRepository;

  constructor() {
    this.recipeRepository = new PrismaRecipeRepository();
  }

  execute({ ingredients, ...payload }: CreateRecipePayload): Promise<Recipe> {
    const ingredientsInput = ingredients.map((ingredient) => ({
      id: generateRandomId(),
      name: ingredient,
    }));

    return this.recipeRepository.create({
      ...payload,
      id: generateRandomId(),
      ingredients: ingredientsInput,
    });
  }
}
