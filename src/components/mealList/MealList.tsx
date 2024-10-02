import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { selectMealData } from '../../redux/meals/selectors';
import { useAppDispatch } from '../../redux/store';
import { setIdMeal } from '../../redux/meals/slice';

import MealItem from '../mealItem/MealItem';
import Skeleton from './Skeleton';

import './mealLIst.scss';

const MealList = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectMealData);

  const onClickSetId = useCallback(
    (id: string) => {
      dispatch(setIdMeal(id));
    },
    [dispatch],
  );

  const meals = items.map((meal) => (
    <MealItem key={meal.idMeal} {...meal} onClickSetId={onClickSetId} />
  ));

  const skeleton = [...new Array(12)].map((_, index) => <Skeleton key={index} />);

  return <div className="flex">{status === 'loading' ? skeleton : meals}</div>;
};

export default MealList;
