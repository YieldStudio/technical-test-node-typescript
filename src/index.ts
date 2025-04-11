import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { prisma } from "../prisma";
import {
  type CreateRecipePayload,
  CreateRecipeUseCase,
} from "./useCases/createRecipe";
const app = new Hono();

/// DON'T WRITE CODE ABOVE THIS LINE

app.post("/recipe", async (c) => {
  const payload: CreateRecipePayload = await c.req.json();

  const createRecipeUseCase = new CreateRecipeUseCase();

  const recipe = await createRecipeUseCase.execute(payload);

  return c.json({ recipe });
});

app.get("/recipe/:id", async (c) => {
  const { id } = await c.req.param();

  const recipe = await prisma.recipe.findUniqueOrThrow({
    where: { id: Number(id) },
    include: { ingredients: true },
  });

  return c.json({ recipe });
});

/// DON'T WRITE CODE BELOW THIS LINE

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
