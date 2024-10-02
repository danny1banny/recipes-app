import React from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';

import { selectorCategories, setCategoryId, setCategoryName } from '../../redux/filterSlice/slice';
import { fetchCategories } from '../../redux/filterSlice/slice';
import { fetchMeals } from '../../redux/meals/fetchMeals';

import Categories from '../categories/Categories';
import MealList from '../mealList/MealList';

import './cookingPage.scss';

const CookingPage = () => {
  const dispatch = useAppDispatch();
  const { categories, categoryId, categoryName } = useSelector(selectorCategories);

  const onChangeCategory = React.useCallback((id: string, name: string) => {
    dispatch(setCategoryId(id));
    dispatch(setCategoryName(name));
  }, []);

  React.useEffect(() => {
    dispatch(fetchMeals(categoryName));
  }, []);

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const category = categories.map((category) => (
    <Categories
      value={categoryId}
      onChangeCategory={onChangeCategory}
      key={category.idCategory}
      {...category}
    />
  ));

  return (
    <div className="cooking-page">
      <p>Discover Recipes</p>
      <div className="line-category"></div>
      <div className="categories-wrapper">
        <div className="categories"> {category}</div>
        <div className="wrapper-button">
          <button>
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z"
                fill="#0F0F0F"
              />
              <path
                d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z"
                fill="#0F0F0F"
              />
              <path
                d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z"
                fill="#0F0F0F"
              />
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="0 -0.5 21 21"
              version="1.1"
              fill="#000000"
            >
              <g id="Page-1" stroke="none" strokeWidth="1" fill="#000000" fillRule="evenodd">
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-59.000000, -200.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M14.55,60 L24,60 L24,51 L14.55,51 L14.55,60 Z M3,60 L12.45,60 L12.45,51 L3,51 L3,60 Z M14.55,49 L24,49 L24,40 L14.55,40 L14.55,49 Z M3,49 L12.45,49 L12.45,40 L3,40 L3,49 Z"
                      id="menu_navigation_grid-[#1530]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="800px"
              height="800px"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <MealList />
    </div>
  );
};

export default CookingPage;
