export const CategoriesName = {
  All: "",
  Electronics: "Electronics",
  Jewelry: "Jewelery",
  MensClothing: `Men's clothing`,
  WomensClothing: `Women's clothing`,
} as const;

export type CategoriesName =
  (typeof CategoriesName)[keyof typeof CategoriesName];
