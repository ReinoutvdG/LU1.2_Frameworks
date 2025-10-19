// src/components/ModuleList.tsx
import React, { useEffect, useState } from "react";

// Dit eventueel nog verplaatsen naar een apart bestand
export interface Module {
  _id: string;
  name: string;
  description: string;
  ec: number;
  level: string;
  education: string;
  createdAt?: string;
}

//Props definiëren die van App.tsx komen
interface ModuleListProps {
  onAdd: () => void;
  onEdit: (module: Module) => void;
}

const ModuleList: React.FC<ModuleListProps> = ({ onAdd, onEdit }) => {
  const [modules, setModules] = useState<Module[]>([]);
  const [selected, setSelected] = useState<Module | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterEC, setFilterEC] = useState<string>("");
  const [filterLevel, setFilterLevel] = useState<string>("");

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

  // Hier komt filter logica
  const filteredModules = modules.filter((m) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      m.name.toLowerCase().includes(search) ||
      m.description.toLowerCase().includes(search) ||
      m.education.toLowerCase().includes(search);

    const matchesEC = filterEC ? m.ec === Number(filterEC) : true;
    const matchesLevel = filterLevel ? m.level === filterLevel : true;

    return matchesSearch && matchesEC && matchesLevel;
  });

  if (loading) return <p className="text-center mt-5">Modules laden...</p>;

  return (
    <div className="container mt-4">
      {/* zoek / filters */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Modules</h1>
        <button className="btn btn-success" onClick={onAdd}>
          + Nieuwe module
        </button>
      </div>

      <div className="mb-4 row g-2">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Zoek op naam, beschrijving of opleiding..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={filterEC}
            onChange={(e) => setFilterEC(e.target.value)}
          >
            <option value="">Filter op EC</option>
            <option value="15">15 EC</option>
            <option value="30">30 EC</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
          >
            <option value="">Filter op niveau</option>
            <option value="NLQF-5">NLQF-5</option>
            <option value="NLQF-6">NLQF-6</option>
          </select>
        </div>
      </div>

      {/* Filtered lijst */}
      <div className="row">
        {filteredModules.length > 0 ? (
          filteredModules.map((m) => (
            <div className="col-md-4 mb-3" key={m._id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{m.name}</h5>
                  <p className="card-text text-muted">{m.education}</p>
                  <p className="mb-2">
                    <strong>EC:</strong> {m.ec}
                  </p>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => setSelected(m)}
                  >
                    Details
                  </button>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => onEdit(m)}
                  >
                    Bewerken
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted mt-4">
            Geen modules gevonden die aan de zoekcriteria voldoen.
          </p>
        )}
      </div>

      {/* Modal blijft hetzelfde */}
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
                <p>
                  <strong>Beschrijving:</strong> {selected.description}
                </p>
                <p>
                  <strong>EC:</strong> {selected.ec}
                </p>
                <p>
                  <strong>Niveau:</strong> {selected.level}
                </p>
                <p>
                  <strong>Opleiding:</strong> {selected.education}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelected(null)}
                >
                  Sluiten
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
