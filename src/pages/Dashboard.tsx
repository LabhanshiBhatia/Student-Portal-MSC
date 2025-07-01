
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  const summaryCards = [
    {
      title: 'Current GPA',
      value: '3.85',
      subtitle: 'Out of 4.0'
    },
    {
      title: 'Attendance',
      value: '90%',
      subtitle: 'This semester'
    },
    {
      title: 'Subjects',
      value: '12/15',
      subtitle: 'Completed'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Here's your academic overview
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {summaryCards.map((card) => (
          <div
            key={card.title}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{card.title}</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{card.value}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{card.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button className="bg-blue-600 dark:bg-blue-700 text-white p-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 text-left transition-colors">
            <h3 className="font-semibold">View Assignments</h3>
            <p className="text-blue-100 dark:text-blue-200 text-sm">Check your pending assignments</p>
          </button>
          <button className="bg-green-600 dark:bg-green-700 text-white p-4 rounded-lg hover:bg-green-700 dark:hover:bg-green-800 text-left transition-colors">
            <h3 className="font-semibold">Check Grades</h3>
            <p className="text-green-100 dark:text-green-200 text-sm">View your latest grades</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
