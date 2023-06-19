import React from "react";

const Form = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit"> {editId ? "Edit" : "Add"}</button>
    </form>
  );
};

export default Form;