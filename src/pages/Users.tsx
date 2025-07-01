
import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

const Users = () => {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="text-gray-600 dark:text-gray-300">Loading students...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center text-red-600 dark:text-red-400">
          Failed to load student data. Please try again.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Student Directory</h1>
        <p className="text-gray-600 dark:text-gray-300">Connect with fellow students</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users?.map((user) => (
          <div key={user.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{user.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">@{user.username}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{user.email}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{user.phone}</p>
            <p className="text-blue-600 dark:text-blue-400 text-sm">{user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
