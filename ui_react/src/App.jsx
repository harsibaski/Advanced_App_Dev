import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import AdminLayout from './layouts/AdminLayout'
import Userlayout from './layouts/Userlayout' // Import the Userlayout component
import About from './pages/About'
import Courses from './pages/Courses'
import Blog from './pages/Blog'
import Profile from './pages/Profile'
import UserHome from './pages/UserHome'
import Institute from './pages/Institute'
import CourseEnroll from './pages/CourseEnroll'
import AdminSidebar from './components/Admin/AdminSidebar'
import AdminCourses from './pages/Admin/AdminCourse'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminInstitutes from './pages/Admin/AdminInstitute'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/sidebar' element={<AdminSidebar />}/>
      <Route element={<AdminLayout />}>
        <Route path='/admin/dashboard' element={<AdminDashboard />}/>
        <Route path='/admin/courses' element={<AdminCourses />}/>
        <Route path='/admin/institutes' element={<AdminInstitutes />}/>


      </Route>
      <Route element={<Userlayout />}> 
        <Route path='/user' element={<UserHome />} /> 
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/institutes' element={<Institute />}/>
        <Route path='/enroll' element={<CourseEnroll />}/>
        <Route path='/user/profile' element={<Profile />} /> 
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
