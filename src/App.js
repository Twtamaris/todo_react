import "./App.css";
import Todos from "./myComponents/Todos";
import Header from "./myComponents/Header";
import { useEffect, useState } from "react";
import Footer from "./myComponents/Footer";
import { AddTodo } from "./myComponents/AddTodo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./myComponents/About";
import Home from "./myComponents/Home";

export default function App() {
  let initTodo;
  if (localStorage.getItem("string") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("string"));
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    const myTodo = {
      sno: string.length,
      title: title,
      desc: desc,
    };
    console.log(myTodo);
    updateString([...string, myTodo]);
  };

  const [string, updateString] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("string", JSON.stringify(string));
  }, [string]);

  return (
    <>
      {/* give margin of 17px */}
      <BrowserRouter>
        <Header title="My Todos List" />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos string={string} updateString={updateString} />
              </>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
