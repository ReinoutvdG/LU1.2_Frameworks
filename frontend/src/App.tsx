// src/App.tsx
import React from "react";
import ModuleList from "./components/ModuleList";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <h1 className="text-center mb-4">Module Overzicht</h1>
        <ModuleList />
      </main>
    </>
  );
};

export default App;
