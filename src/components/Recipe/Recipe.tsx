import { FC } from 'react';
import './Recipe.scss';

type TRecipe = {
  strMealThumb: string;
  strCategory: string;
  strInstructions: string;
  strMeal:string;
}

const Recipe: FC<TRecipe>= ({strMealThumb,strInstructions,strCategory,strMeal}) => {

  return (
    <div className="recipes">
      <div className='recipes-title'>
        <span>
          <svg
            fill="#a9aeb9"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M12,39h32V2H12C8.691,2,6,4.691,6,8v34.417C6,45.496,8.691,48,12,48h32v-2H12c-2.168,0-4-1.641-4-3.583C8,40.501,9.757,39,12,39z M36.709,31.706C36.514,31.902,36.257,32,36,32c-0.255,0-0.511-0.097-0.705-0.292l-6.523-6.494l-1.76,1.76l-1.846-1.879l3.153-3.153l8.387,8.349C37.097,30.681,37.099,31.314,36.709,31.706z M16.286,10.007l7.733,7.781l-3.044,3.044L16.23,16C14.568,14.338,14.594,11.637,16.286,10.007z M14.329,30.293l13.024-13.024c-0.034-0.085-0.083-0.163-0.107-0.252c-0.399-1.509-0.322-3.426,1.045-4.777c2.031-2.094,5.497-2.989,6.998-1.505c1.501,1.571,0.596,4.909-1.435,6.916c-1.444,1.428-3.298,1.545-4.8,1.16c-0.104-0.027-0.196-0.081-0.294-0.122L14.743,31.707C14.548,31.902,15.292,32,15.036,32s-0.512-0.098-0.707-0.293C13.938,31.316,13.938,30.684,14.329,30.293z"></path>
          </svg>
        </span>
        <h2>Recipe preview</h2>
      </div>

      <div className="line"></div>
      <div className="recipe">
      <img src={strMealThumb} alt="#" />
      <h2>{strMeal}</h2>
      <h4>{strCategory}</h4>
      <p>
        {strInstructions.slice(0, 500)}
      </p>
    </div>
    </div>
  );
};

export default Recipe;
