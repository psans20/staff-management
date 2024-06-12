import { EmployeeProvider } from './context/EmployeeContext';
import Search from './components/Search';
import DarkModeToggle from './components/DarkModeToggle';

const Home = () => {
  return (
    <EmployeeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-10 p-4">
        <div className="container mx-auto flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Staff Management</h1>
          <DarkModeToggle />
        </div>
        <Search />
      </div>
    </EmployeeProvider>
  );
};

export default Home;
