import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const key = name.split(".")[1] as keyof UserData["address"];
      setUser((prev) => ({ ...prev, address: { ...prev.address, [key]: value } }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1] as keyof UserData["company"];
      setUser((prev) => ({ ...prev, company: { ...prev.company, [key]: value } }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value } as UserData));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter full name"
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-gray-700 mb-1">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter username"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-gray-800 font-medium mb-2">Address</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="address.street"
                value={user.address.street}
                onChange={handleChange}
                placeholder="Street"
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="address.suite"
                value={user.address.suite}
                onChange={handleChange}
                placeholder="Suite"
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="address.city"
                value={user.address.city}
                onChange={handleChange}
                placeholder="City"
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="address.zipcode"
                value={user.address.zipcode}
                onChange={handleChange}
                placeholder="Zipcode"
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-1">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter phone number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="website" className="block text-gray-700 mb-1">Website</label>
            <input
              type="text"
                id="website"
                name="website"
                value={user.website}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter website"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-gray-800 font-medium mb-2">Company</h3>
            <input
              type="text"
              name="company.name"
              value={user.company.name}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-2"
            />
            <textarea
              name="company.catchPhrase"
              value={user.company.catchPhrase}
              onChange={handleChange}
              rows={2}
              placeholder="Catch Phrase"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-2"
            />
            <input
              type="text"
              name="company.bs"
              value={user.company.bs}
              onChange={handleChange}
              placeholder="BS"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
