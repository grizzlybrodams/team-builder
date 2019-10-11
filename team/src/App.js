import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Note from "./Components/Notes"
function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Joshua Daley",
      email: "jddaley328@gmail.com",
      role:"Web Design",
    }
  ]);
  const addMember = note => {
    const newMember = {
      id:Date.now(),
      title: note.title,
      email: note.email,
      role: note.role,
    };

    setNotes([...notes, newMember]);
  };
  return (
    <div className="App">
      <h1> Welcome Team</h1>
      <Form addNoteFn={addMember} />
      <Note notesList={notes} />
    </div>
  );
}

export default App;
