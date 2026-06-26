import { ToastContainer } from 'react-toastify'
import './App.css'
import Content from './pages/layout/content/Content'
import MainLayout from './pages/layout/MainLayout/MainLayout'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/login' ? <Content/> : location.pathname === '/register' ? <Content/> :<MainLayout />}
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
