import { ToastContainer } from 'react-toastify'
import './App.css'
import Content from './pages/layout/content/Content'
import MainLayout from './pages/layout/MainLayout/MainLayout'
import { useLocation } from 'react-router-dom'
import AdminLayout from './pages/layout/AdminLayout/AdminLayout'

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  return (
    <>
      {location.pathname === '/login' ?
        <Content />
        :
        location.pathname === '/register' ?
          <Content />
          :
          isAdmin ?
            <AdminLayout />
            :
            <MainLayout />
      }
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
