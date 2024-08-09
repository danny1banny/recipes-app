import { FC } from 'react';

type TCategory = {
  idCategory: string;
  strCategory: string;
  onChangeCategory: (id: string, name: string) => void;
  value: string;
};

const Categories: FC<TCategory> = ({ strCategory, idCategory, onChangeCategory, value }) => {
  return (
    <div className="container">
      <div>
        <button
          onClick={() => onChangeCategory(idCategory, strCategory)}
          key={idCategory}
          className={value === idCategory ? 'active' : ''}
        >
          <h2> {strCategory}</h2>
        </button>
      </div>
    </div>
  );
};

export default Categories;
