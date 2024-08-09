import { useSelector } from 'react-redux';
import CookingPage from '../components/cookingPage/CookingPage';
import Recipe from '../components/Recipe/Recipe';
import { selectMealData } from '../redux/meals/selectors';
import { useEffect, useState } from 'react';
import axios from 'axios';

type TRecipe = {
  idMeal: string;
  strMealThumb: string;
  strCategory: string;
  strInstructions: string;
  strMeal:string;
}


const Recipes = () => {
  const [mealByID, setMealById] = useState<TRecipe[]>([]);
  const { id } = useSelector(selectMealData);

  useEffect(() => {
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

  console.log(id, mealByID);

  const recipeItem = mealByID.map((item) => <Recipe key={item.idMeal} {...item}/>);
  return (
    <>
      <CookingPage />
      {mealByID === null ? <div>'выбери'</div> : recipeItem}
    </>
  );
};

export default Recipes;
