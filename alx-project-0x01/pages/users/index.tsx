import React from "react";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

interface UsersProps {
  posts: UserProps[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button className="bg-green-600 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: UserProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
