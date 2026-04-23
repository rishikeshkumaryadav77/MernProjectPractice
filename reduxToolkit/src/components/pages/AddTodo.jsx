import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <div className="bg-black w-full h-screen text-center p-1.5">
      <h1 className="text-white">AddTodo</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-white p-2 m-5 rounded-2xl w-100%"
        />

        <button
          type="submit"
          className="bg-amber-400 text-xl mt-1 p-4 rounded-2xl"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
