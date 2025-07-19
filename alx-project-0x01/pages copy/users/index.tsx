import React from 'react';
import Header from "@/components/layout/Header";

const Users: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Users Page</h1>
      <p>List of users will appear here.</p>
    </main>
  </div>
);

export default Users;
