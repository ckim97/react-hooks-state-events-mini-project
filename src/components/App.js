import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { render } from "@testing-library/react";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });
// console.log(TASKS);
// console.log(CATEGORIES);

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);

  const [selectedCategory, setSelectedCategory] = useState("");
  // console.log(categories);
  
  function onHandleDelete(deletedTask) {
    const newTasks = tasks.filter((task) => task.text !== deletedTask);
    setTasks(newTasks);
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} tasks={tasks} onCategoryFilter={setTasks}/>
      <NewTaskForm />
      <TaskList tasks={tasks} onHandleDelete={onHandleDelete}/>
    </div>
  );
}

export default App;

// import React, {useState} from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// function App() {
//   const [tasks, setTasks] = useState(TASKS)
//   const [categories, setCategories] = useState(CATEGORIES)
//   // const [selectedTask, setSelectedTask] = useState('')

//   function onHandleDelete(deletedTask) {
//     const newTasks = tasks.filter((task) => task !== deletedTask);
//     setTasks(newTasks);
//   }

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter categories={categories}/>
//       <NewTaskForm />
//       <TaskList tasks={tasks} onHandleDelete={onHandleDelete}/>
//     </div>
//   );
// }

// export default App;