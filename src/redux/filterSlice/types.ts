import { Status } from '../meals/types';

export type TCategories = {
  idCategory: string;
  strCategory: string;
};

export interface ICategory {
  categoryId: string;
  categoryName: string;
  categories: TCategories[];
  status: Status;
}
