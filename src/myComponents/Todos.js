import React from "react";
import Todo from "./Todo";

const Todos = ({ string, updateString }) => {
  const onDelete = (hehe) => {
    console.log("I am on delete of todo", hehe);

    updateString(
      string.filter((e) => {
        return e !== hehe;
      })
    );
    localStorage.getItem("string");
  };
  // Arrow function

  return string.length === 0 ? (
    <h1>No todos to display</h1>
  ) : (
    //to know the length of string

    <div className="container">
      <h3>Todos list</h3>
      {/* use map function */}
      {string.map((hehe) => {
        return (
          <Todo
            hehe={hehe}
            onDelete={onDelete}
            string={string}
            key={hehe.sno}
          />
        );
      })}
    </div>
  );
};

export default Todos;
