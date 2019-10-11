import React, { useState } from "react";

const Form = props => {
  const [note, setNote] = useState({
    title: "",
    email: "",
    role: ""
  });

  const handleChange = e => {
    setNote({ ...note, [e.target.title]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addNoteFn(note);
    setNote({
      title: "",
      email: "",
      role: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Name</label>
      <input
        id="title"
        value={note.title}
        type="text"
        name="title"
        onChange={handleChange}
        
      />
      <br/>
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        value={note.email}
        type="text"
        name="email"
        onChange={handleChange}
      />
      <br/>
      <label htmlFor="role">Role</label>
      <input
        id="role"
        value={note.role}
        type="text"
        name="role"
        onChange={handleChange}
      />
      <br/>
      <button type="submit">Add Name</button>
    </form>
  );
};
export default Form;
