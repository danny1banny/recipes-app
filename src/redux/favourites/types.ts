import { Status } from "../meals/types";

export type TRecipe = {
  idMeal: string;
  strMealThumb: string;
  strCategory: string;
  strInstructions: string;
  strMeal:string;
}

export interface IRecipe {
  meals:string,
  favourMeal: TRecipe[],
  
  status: Status,
}