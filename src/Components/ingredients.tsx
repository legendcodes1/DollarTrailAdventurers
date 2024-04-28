export interface Ingredient {
    icon: string;
    label: string;
  }
  
  export const allIngredients = [
    { icon: "🍅", label: "Week 1" },
    { icon: "🥬", label: "Week 2" },
    { icon: "🧀", label: "Week 3" },
    { icon: "🥕", label: "Week 4" },
  ];
  
  const [week1, week2, week3, week4] = allIngredients;
  export const initialTabs = [week1, week2, week3, week4];
  
  export function getNextIngredient(
    ingredients: Ingredient[]
  ): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
  }
  