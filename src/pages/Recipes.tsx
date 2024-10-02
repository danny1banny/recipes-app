import React from 'react';
import { useSelector } from 'react-redux';
import CookingPage from '../components/cookingPage/CookingPage';
import Recipe from '../components/Recipe/Recipe';
import { selectMealData } from '../redux/meals/selectors';
import axios from 'axios';
// import { useAppDispatch } from '../redux/store';

interface TRecipe {
  idMeal: string;
  strMealThumb: string;
  strCategory: string;
  strInstructions: string;
  strMeal: string;
}

const Recipes = () => {
  const [mealByID, setMealById] = React.useState<TRecipe[]>([]);
  const { id } = useSelector(selectMealData);
  // const dispatch = useAppDispatch();

  const recipeItem = mealByID.map((item) => <Recipe key={item.idMeal} {...item} />);

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        setMealById(data.meals);
      } catch (error) {
        alert('Ошибка при получении пиццы');
      }
    }
    fetchPizza();
  }, [id]);

  return (
    <>
      <CookingPage />
      {recipeItem}
    </>
  );
};

export default Recipes;
