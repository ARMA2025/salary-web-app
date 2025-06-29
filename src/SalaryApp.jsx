
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const initialData = [
  {
    id: "SAL001",
    name: "Mohamed ARAIBIA",
    department: "Administration",
    position: "Manager",
    contract: "CDI",
    month: "Janvier",
    netSalary: 4000,
    complement: 1000,
    ticket: 1000,
    mission: 0,
    fuel: 1000,
    comm: 50,
    bonus: 0,
    irpp: 1000,
    cnss: 400,
    totalNet: 7050,
    totalBrut: 8450
  }
];

export default function SalaryApp() {
  const [salaries, setSalaries] = useState(initialData);
  const [form, setForm] = useState({
    id: '', name: '', department: '', position: '', contract: '', month: '',
    netSalary: '', complement: '', ticket: '', mission: '', fuel: '',
    comm: '', bonus: '', irpp: '', cnss: '', totalNet: '', totalBrut: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = () => {
    const newSalary = { ...form, id: form.id || `SAL${salaries.length + 1}` };
    setSalaries([...salaries, newSalary]);
  };

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-3 gap-2">
            {Object.keys(form).map(key => (
              <Input
                key={key}
                placeholder={key}
                name={key}
                value={form[key]}
                onChange={handleChange}
              />
            ))}
          </div>
          <Button onClick={handleAdd}>Add Salary</Button>
        </CardContent>
      </Card>

      {salaries.map((s, index) => (
        <Card key={index}>
          <CardContent className="grid grid-cols-4 gap-2 p-2">
            <div>{s.id}</div>
            <div>{s.name}</div>
            <div>{s.month}</div>
            <div>{s.totalNet} TND</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
