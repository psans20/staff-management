"use client";
import { useState } from 'react';
import { useEmployees } from '../context/EmployeeContext';
import EmployeeForm from './EmployeeForm';
import Modal from './Modal';
import { RiEditCircleFill } from "react-icons/ri";

interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
}


interface EmployeeListProps {
  filteredEmployees: Employee[];
}

const EmployeeList = ({ filteredEmployees }: EmployeeListProps) => {
  const { deleteEmployee } = useEmployees();
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setEditingEmployee(null);
    setIsModalVisible(false);
  };

  return (
    <div>
      <EmployeeForm employee={null} onClose={() => {}} />
      <ul className="mt-4 space-y-4">
        {filteredEmployees.map(employee => (
          <li key={employee.id} className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-md flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{employee.name}</h2>
              <p className="text-gray-700 dark:text-gray-300">{employee.email}</p>
              <p className="text-gray-700 dark:text-gray-300">{employee.position}</p>
            </div>
            <div>
              <button
                onClick={() => handleEdit(employee)}
                className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => deleteEmployee(employee.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Modal isVisible={isModalVisible} onClose={closeModal}>
        <EmployeeForm employee={editingEmployee} onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default EmployeeList;
