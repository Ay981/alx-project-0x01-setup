import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-sm mx-auto my-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <div className="mb-2">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">@{username}</p>
      </div>
      <div className="text-gray-600 mb-2">
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>
          Website: <a href={`https://${website}`} className="text-blue-500" target="_blank" rel="noopener noreferrer">{website}</a>
        </p>
      </div>
      <div className="text-gray-600 mb-2">
        <p>Address: {address.suite}, {address.street}, {address.city} {address.zipcode}</p>
      </div>
      <div className="text-gray-600">
        <p>Company: {company.name}</p>
        <p className="italic">"{company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;
