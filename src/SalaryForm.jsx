import React, { useState } from 'react';

const SalaryForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    date: '',
    nom: '',
    prenom: '',
    departement: 'ADMINISTRATION',
    salaire_net: '',
    contrat: 'CDI'
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://salary-backend-21qi.onrender.com/api/salaries", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setFormData({
      date: '',
      nom: '',
      prenom: '',
      departement: 'ADMINISTRATION',
      salaire_net: '',
      contrat: 'CDI'
    });
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
      <input name="date" type="date" value={formData.date} onChange={handleChange} required />
      <input name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
      <input name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
      <select name="departement" value={formData.departement} onChange={handleChange}>
        <option>ADMINISTRATION</option>
        <option>TEST</option>
        <option>EMBEDDED</option>
      </select>
      <input name="salaire_net" placeholder="Salaire Net" value={formData.salaire_net} onChange={handleChange} required />
      <select name="contrat" value={formData.contrat} onChange={handleChange}>
        <option>CDI</option>
        <option>CIVP</option>
        <option>INDEPENDANT</option>
      </select>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default SalaryForm;