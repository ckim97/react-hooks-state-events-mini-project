import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory, tasks, onCategoryFilter}) {
  console.log(categories);
  console.log(tasks);
 

  function handleCategoryClick(category){
    setSelectedCategory(category)
    const newTasks = tasks.filter((task) => task.category === category);
    onCategoryFilter(newTasks);
    console.log(newTasks);
  }

  const renderCategories = categories.map((category) => <button key={category} className={selectedCategory === category ? "selected" : ""} onClick={() => handleCategoryClick(category)}>{category}</button>);
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategories}
    </div>
  );
}

export default CategoryFilter;
