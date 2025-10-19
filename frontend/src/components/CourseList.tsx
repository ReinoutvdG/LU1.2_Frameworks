import React, { useEffect, useState } from "react";

export interface Course {
  _id: string;
  title: string;
  code: string;
  description: string;
  credits: number;
}

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Fout bij ophalen courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) return <p className="text-center mt-5">Courses laden...</p>;

  return (
    <div className="container mt-4">
      <h1>Courses</h1>
      <div className="row">
        {courses.length > 0 ? (
          courses.map((c) => (
            <div key={c._id} className="col-md-4 mb-3">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{c.title}</h5>
                  <p className="card-text text-muted">{c.code}</p>
                  <p>{c.description}</p>
                  <p>
                    <strong>Credits:</strong> {c.credits}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted mt-4">
            Geen courses gevonden.
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
