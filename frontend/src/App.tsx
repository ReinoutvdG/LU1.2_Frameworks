import React, { useState } from "react";
import Navbar from "./components/Navbar"; 
import ModuleList from "./components/ModuleList";
import ModuleForm, { type Module } from "./components/ModuleForm";


function App() {
  const [page, setPage] = useState<"list" | "form">("list");
  const [editing, setEditing] = useState<Module | null>(null);

  const handleSave = async (data: Module) => {
    if (editing) {
      await fetch(`http://localhost:5000/api/modules/${editing._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } else {
      await fetch("http://localhost:5000/api/modules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }

    setEditing(null);
    setPage("list");
  };

  return (
    <>
      <Navbar /> 
      {page === "list" ? (
        <ModuleList
          onAdd={() => {
            setEditing(null);
            setPage("form");
          }}
          onEdit={(m) => {
            setEditing(m);
            setPage("form");
          }}
        />
      ) : (
        <ModuleForm
          existingModule={editing || undefined}
          onSave={handleSave}
          onCancel={() => setPage("list")}
        />
      )}
    </>
  );
}

export default App;
