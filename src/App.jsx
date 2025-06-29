import React, { useState, useEffect } from 'react';
import SalaryForm from './SalaryForm';

const App = () => {
  const [salaries, setSalaries] = useState([]);

  const fetchSalaries = async () => {
    const response = await fetch("https://salary-backend-21qi.onrender.com/api/salaries");
    const data = await response.json();
    setSalaries(data);
  };

  useEffect(() => {
    fetchSalaries();
  }, []);

  return (
    <div style={{ backgroundColor: '#e6f0ff', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Salary Management</h1>
      <SalaryForm onAdd={fetchSalaries} />
      <table style={{ width: '100%', marginTop: '2rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Département</th>
            <th>Salaire Net</th>
            <th>Contrat</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((sal) => (
            <tr key={sal.id}>
              <td>{sal.date}</td>
              <td>{sal.nom}</td>
              <td>{sal.prenom}</td>
              <td>{sal.departement}</td>
              <td>{sal.salaire_net}</td>
              <td>{sal.contrat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;