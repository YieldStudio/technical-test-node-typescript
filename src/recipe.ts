export type Recipe = {
  id: number;
  title: string;
  prepTime: number;
  cookingTime: number;
  ingredients: Ingredient[];
};

export type Ingredient = {
  id?: number;
  name: string;
};
