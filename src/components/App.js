
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const departments = ["ADMINISTRATION", "TEST", "EMBEDDED"];

export default function App() {
  const [form, setForm] = useState({
    id: '', name: '', department: 'ADMINISTRATION', position: '', contract: '', month: 'Janvier',
    netSalary: '', complement: '', ticket: '', mission: '', fuel: '',
    comm: '', bonus: '', irpp: '', cnss: '', totalNet: '', totalBrut: ''
  });
  const [salaries, setSalaries] = useState([]);
  const [filterMonth, setFilterMonth] = useState('');

  useEffect(() => {
    axios.get('https://salary-backend.onrender.com/api/salaries')
      .then(res => setSalaries(res.data));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = () => {
    axios.post('https://salary-backend.onrender.com/api/salaries', form)
      .then(() => {
        setSalaries(prev => [...prev, form]);
        alert('Salary added!');
      });
  };

  const filteredSalaries = filterMonth
    ? salaries.filter(s => s.month === filterMonth)
    : salaries;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Ajouter un Salaire</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <input name="name" placeholder="Nom" value={form.name} onChange={handleChange} />
        <select name="department" value={form.department} onChange={handleChange}>
          {departments.map(dep => <option key={dep}>{dep}</option>)}
        </select>
        <input name="position" placeholder="Poste" value={form.position} onChange={handleChange} />
        <input name="contract" placeholder="Contrat" value={form.contract} onChange={handleChange} />
        <select name="month" value={form.month} onChange={handleChange}>
          {months.map(m => <option key={m}>{m}</option>)}
        </select>
        <input name="netSalary" placeholder="Salaire Net" onChange={handleChange} />
        <input name="complement" placeholder="Complément" onChange={handleChange} />
        <input name="ticket" placeholder="Ticket" onChange={handleChange} />
        <input name="mission" placeholder="Mission" onChange={handleChange} />
        <input name="fuel" placeholder="Carburant" onChange={handleChange} />
        <input name="comm" placeholder="Comm" onChange={handleChange} />
        <input name="bonus" placeholder="Prime" onChange={handleChange} />
        <input name="irpp" placeholder="IRPP" onChange={handleChange} />
        <input name="cnss" placeholder="CNSS" onChange={handleChange} />
        <input name="totalNet" placeholder="Total Net" onChange={handleChange} />
        <input name="totalBrut" placeholder="Total Brut" onChange={handleChange} />
        <button onClick={handleAdd}>Ajouter</button>
      </div>

      <h3>Filtrer par Mois</h3>
      <select onChange={e => setFilterMonth(e.target.value)} value={filterMonth}>
        <option value="">Tous</option>
        {months.map(m => <option key={m}>{m}</option>)}
      </select>

      <h3>Liste des Salaires</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Nom</th><th>Département</th><th>Poste</th><th>Mois</th><th>Total Net</th>
          </tr>
        </thead>
        <tbody>
          {filteredSalaries.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.department}</td>
              <td>{s.position}</td>
              <td>{s.month}</td>
              <td>{s.totalNet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
