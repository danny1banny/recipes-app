export type TMeal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type TMealData = {
  idMeal: string;
  strArea: string;
  strMealThumb: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IMealSliceState {
  id: string;
  items: TMeal[];
  status: Status;
}
