import React from "react";

const CoursesPage: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1>Cursusoverzicht</h1>
      <p>Hier komen later alle courses te staan.</p>

      {/* Dummy lijst met courses */}
      <ul>
        <li>Course 1: Introduction to Programming</li>
        <li>Course 2: Advanced Web Development</li>
        <li>Course 3: Database Design</li>
        <li>Course 4: Software Engineering</li>
      </ul>
    </div>
  );
};

export default CoursesPage;
