import React from "react";

function CategoryFilter({categories}) {
  console.log(categories);

  function handleCategoryClick(){
    
  }

  const renderCategories = categories.map((category) => <button key={category} onClick={handleCategoryClick}>{category}</button>);
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategories}
    </div>
  );
}

export default CategoryFilter;
