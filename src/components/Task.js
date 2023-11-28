import React from "react";

function Task({text, category, onHandleDelete}) {
  // console.log(text);
  
  function handleDelete() {
    onHandleDelete(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;

// import React from "react";

// function Task({text, category, onHandleDelete}) {

//   console.log(onHandleDelete)
  
//   return (
//     <div className="task">
//       <div className="label" >{category}</div>
//       <div className="text" >{text}</div>
//       <button className="delete" onClick={onHandleDelete} >X</button>
//     </div>
//   );
// }

// export default Task;
