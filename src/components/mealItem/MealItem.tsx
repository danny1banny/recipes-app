import './MealItem.scss';

interface MealTypeProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  onClickSetId: (id: string) => void;
}

const MealItem = ({ idMeal, strMeal, strMealThumb, onClickSetId }: MealTypeProps) => {
  return (
    <div key={idMeal} className="wrapper">
      <div className="wrapper_img" onClick={() => onClickSetId(idMeal)}>
        <img src={strMealThumb} alt="#" />
        <span className="star">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
          >
            <path
              d="M11.5245 4.46353C11.6741 4.00287 12.3259 4.00287 12.4755 4.46353L13.9084 8.87336C13.9753 9.07937 14.1673 9.21885 14.3839 9.21885H19.0207C19.505 9.21885 19.7064 9.83866 19.3146 10.1234L15.5633 12.8488C15.3881 12.9761 15.3148 13.2018 15.3817 13.4078L16.8145 17.8176C16.9642 18.2783 16.437 18.6613 16.0451 18.3766L12.2939 15.6512C12.1186 15.5239 11.8814 15.5239 11.7061 15.6512L7.95488 18.3766C7.56303 18.6613 7.03578 18.2783 7.18546 17.8176L8.6183 13.4078C8.68524 13.2018 8.61191 12.9761 8.43667 12.8488L4.68544 10.1234C4.29358 9.83866 4.49497 9.21885 4.97933 9.21885H9.6161C9.83272 9.21885 10.0247 9.07937 10.0916 8.87336L11.5245 4.46353Z"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="wrapper_descr">
        <h2>{strMeal}</h2>
      </div>
    </div>
  );
};

export default MealItem;
