import React from "react";

const Todo = ({ hehe, onDelete }) => {
  return (
    <>
      <div>
        <h4>{hehe.title}</h4>
        <p>{hehe.desc}</p>
        <button
          className="btn btn-danger"
          onClick={() => console.log(onDelete(hehe))}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};

export default Todo;
