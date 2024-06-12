"use client";
import { useState } from 'react';
import { useEmployees } from '../context/EmployeeContext';
import EmployeeList from './EmployeeList';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const { employees } = useEmployees();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-lg mx-auto my-4 relative">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search employees..."
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md pl-10 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      />
      <FaSearch className="absolute left-3 top-3 text-gray-400 dark:text-gray-300" />
      <EmployeeList filteredEmployees={filteredEmployees} />
    </div>
  );
};

export default Search;
