// src/components/ModuleList.tsx
import React, { useEffect, useState } from "react";

interface Module {
  _id: string;
  name: string;
  description: string;
  ec: number;
  level: string;
  education: string;
  createdAt?: string;
}

const ModuleList: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [selected, setSelected] = useState<Module | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchModules = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/modules");
        const data = await response.json();
        setModules(data);
      } catch (err) {
        console.error("Fout bij ophalen modules:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  if (loading) return <p className="text-center mt-5">Modules laden...</p>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Modules</h1>

      <div className="row">
        {modules.map((m) => (
          <div className="col-md-4 mb-3" key={m._id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{m.name}</h5>
                <p className="card-text text-muted">{m.education}</p>
                <p className="mb-2"><strong>EC:</strong> {m.ec}</p>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setSelected(m)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details modal */}
      {selected && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selected.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelected(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p><strong>Beschrijving:</strong> {selected.description}</p>
                <p><strong>EC:</strong> {selected.ec}</p>
                <p><strong>Niveau:</strong> {selected.level}</p>
                <p><strong>Opleiding:</strong> {selected.education}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelected(null)}
                >
                  Sluiten
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => alert("Hier kun je later bewerken")}
                >
                  Bewerken
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleList;
