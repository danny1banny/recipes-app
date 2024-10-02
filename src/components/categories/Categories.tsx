import * as React from 'react';

type TCategory = {
  idCategory: string;
  strCategory: string;
  onChangeCategory: (id: string, name: string) => void;
  value: string;
};

const Categories = ({ strCategory, idCategory, onChangeCategory, value }: TCategory) => {
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
