import React from 'react';
import { NavLink } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { Book, Building, Columns } from 'react-bootstrap-icons'; // Import icons
import Logo from '/Users/arunvs/Advanced_App_dev/ui_react/vite-project/public/vite.svg'; // Import your SVG logo

const AdminSidebar = () => {
  return (
    <div className="bg-white shadow-lg h-screen text-orange-500 w-1/6 flex flex-col">
      <div className="p-4 flex items-center justify-center">
        <img src={Logo} alt="Logo" className="w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">Matrix</h1>
      </div>
      <p className="text-center text-xs text-orange-500 font-semibold mb-4">Admin</p>
      <div className="flex flex-col justify-center items-center">
        <NavLink to="/admin/dashboard" className="p-4 flex items-center hover:bg-gray-800">
          <Columns className="mr-2" size={20} />
          Dashboard
        </NavLink>
        <NavLink to="/admin/courses" className="p-4 flex items-center hover:bg-gray-800">
          <Book className="mr-2" size={20} />
          Courses
        </NavLink>
        <NavLink to="/admin/institutes" className="p-4 flex items-center hover:bg-gray-800">
          <Building className="mr-2" size={20} />
          Institutes
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
