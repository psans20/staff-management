"use client";
import { useState, useEffect } from 'react';
import { useEmployees } from '../context/EmployeeContext';
import { IoPersonAddSharp } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";

const initialFormState = { id: 0, name: '', email: '', position: '' };

const EmployeeForm = ({ employee, onClose }: { employee: any; onClose: () => void }) => {
  const { addEmployee, editEmployee } = useEmployees();
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    if (employee) {
      setForm(employee);
    } else {
      setForm(initialFormState);
    }
  }, [employee]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (form.id) {
      editEmployee(form);
    } else {
      addEmployee(form);
    }
    setForm(initialFormState);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 my-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{form.id ? 'Edit Staff' : 'Add Staff'}</h2>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Position</label>
        <input
          type="text"
          value={form.position}
          onChange={(e) => setForm({ ...form, position: e.target.value })}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>
      <button type="submit" className="flex items-center gap-x-2 px-4 py-2 bg-green-500 text-white rounded-md">
        {form.id ? <BsPencilSquare/> : <IoPersonAddSharp/>}
        {form.id ? 'Update Staff' : 'Add Staff'}
      </button>
    </form>
  );
};

export default EmployeeForm;
