import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ModuleList from "./components/ModuleList";
import ModuleForm, { type Module } from "./components/ModuleForm";
import CourseList from "./components/CourseList";

function App() {
  const [page, setPage] = useState<"modules" | "form" | "courses">("modules");
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
    setPage("modules");
  };

  return (
    <>
      <Navbar
        currentPage={page === "courses" ? "courses" : "modules"}
        onNavigate={(p) => setPage(p)}
      />

      {page === "modules" ? (
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
      ) : page === "form" ? (
        <ModuleForm
          existingModule={editing || undefined}
          onSave={handleSave}
          onCancel={() => setPage("modules")}
        />
      ) : (
        <CourseList />
      )}
    </>
  );
}

export default App;
