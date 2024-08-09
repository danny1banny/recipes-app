import { useSelector } from 'react-redux';
import { selectMealData } from '../../redux/meals/selectors';
import { FC, useCallback } from 'react';
import MealItem from '../mealItem/MealItem';
import Skeleton from './Skeleton';
import { useAppDispatch } from '../../redux/store';
import { setIdMeal } from '../../redux/meals/slice';

import './mealLIst.scss';
const MealList: FC = () => {
  const dispatch = useAppDispatch();

  const onClickSetId = useCallback(
    (id: string) => {
      dispatch(setIdMeal(id));
    },
    [dispatch],
  );

  const { items, status } = useSelector(selectMealData);

  const meals = items.map((meal) => (
    <MealItem key={meal.idMeal} {...meal} onClickSetId={onClickSetId} />
  ));

  const skeleton = [...new Array(12)].map((_, index) => <Skeleton key={index} />);

  return <div className="flex">{status === 'loading' ? skeleton : meals}</div>;
};

export default MealList;
