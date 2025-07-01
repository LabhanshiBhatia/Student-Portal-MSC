
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to Student Portal
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Hello {user?.name}! Manage your academic details in one place.
        </p>
        
        <div className="flex justify-center space-x-4">
          <Link
            to="/dashboard"
            className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/users"
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            View Students
          </Link>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Dashboard</h3>
          <p className="text-gray-600 dark:text-gray-300">Track your GPA, attendance, and subjects</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Users</h3>
          <p className="text-gray-600 dark:text-gray-300">Connect with fellow students</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Profile</h3>
          <p className="text-gray-600 dark:text-gray-300">Manage your account settings</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
