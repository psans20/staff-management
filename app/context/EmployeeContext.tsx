// context/EmployeeContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
}

interface EmployeeContextType {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
  editEmployee: (employee: Employee) => void;
  deleteEmployee: (id: number) => void;
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

const sampleEmployees: Employee[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', position: 'Developer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', position: 'Designer' },
  { id: 3, name: 'Sam Brown', email: 'sam@example.com', position: 'Manager' },
  { id: 4, name: 'Lisa White', email: 'lisa@example.com', position: 'HR' },
  { id: 5, name: 'Mike Johnson', email: 'mike@example.com', position: 'Tester' },
];

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [employees, setEmployees] = useState<Employee[]>(sampleEmployees);

  const addEmployee = (employee: Employee) => {
    setEmployees([...employees, { ...employee, id: Date.now() }]);
  };

  const editEmployee = (updatedEmployee: Employee) => {
    setEmployees(employees.map(emp => (emp.id === updatedEmployee.id ? updatedEmployee : emp)));
  };

  const deleteEmployee = (id: number) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, editEmployee, deleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => {
  const context = useContext(EmployeeContext);
  if (context === undefined) {
    throw new Error('useEmployees must be used within an EmployeeProvider');
  }
  return context;
};
