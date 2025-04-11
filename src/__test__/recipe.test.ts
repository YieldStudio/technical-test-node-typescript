import { it, describe } from "vitest";
import { CreateRecipeUseCase } from "../useCases/createRecipe";

describe("Recipe", () => {
  it("should return a newly created recipe", async () => {
    const createRecipeUseCase = new CreateRecipeUseCase();
  });
});
