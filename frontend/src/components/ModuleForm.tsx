import React, { useState, useEffect } from "react";

export interface Module {
  _id?: string;
  name: string;
  description: string;
  ec: number;
  level: string;
  education: string;
}

interface ModuleFormProps {
  existingModule?: Module;
  onSave: (data: Module) => void;
  onCancel: () => void;
}

const ModuleForm: React.FC<ModuleFormProps> = ({ existingModule, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Module>({
    name: "",
    description: "",
    ec: 15,
    level: "NLQF-5",
    education: "",
  });

  useEffect(() => {
    if (existingModule) setFormData(existingModule);
  }, [existingModule]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="container mt-4">
      <h2>{existingModule ? "Module bewerken" : "Nieuwe module toevoegen"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Naam</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Beschrijving</label>
          <input
            data-testid="description"
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">EC</label>
          <select name="ec" className="form-select" value={formData.ec} onChange={handleChange}>
            <option value={15}>15</option>
            <option value={30}>30</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Level</label>
          <select
            name="level"
            className="form-select"
            value={formData.level}
            onChange={handleChange}
          >
            <option value="NLQF-5">NLQF-5</option>
            <option value="NLQF-6">NLQF-6</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Opleiding</label>
          <input
            className="form-control"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">
          Opslaan
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Annuleren
        </button>
      </form>
    </div>
  );
};

export default ModuleForm;
