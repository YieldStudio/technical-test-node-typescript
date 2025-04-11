import type { PrismaClient } from "prisma/generated";
import type { Recipe } from "../recipe";
import type { RecipeRepository } from "./recipe";
import { prisma } from "../../prisma";

export class PrismaRecipeRepository implements RecipeRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  find(id: number): Promise<Recipe> {
    return this.prisma.recipe.findUniqueOrThrow({
      where: { id },
      include: { ingredients: true },
    });
  }

  create({ ingredients, ...recipe }: Recipe): Promise<Recipe> {
    return this.prisma.recipe.create({
      data: { ...recipe, ingredients: { create: ingredients } },
      include: { ingredients: true },
    });
  }
}
