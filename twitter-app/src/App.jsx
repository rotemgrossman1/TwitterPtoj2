import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import { Navbar } from './components/NavBar'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core';
import { TweetProvider } from './context/TweetContext'
import AuthProvider from './auth/AuthProvider';
import ProtectedRoute from './auth/ProtectedRoute';
import { LoginPage } from './pages/LoginPage';
function App() {
//   const router = createBrowserRouter(
//   [
//     { path: "/", element: <HomePage /> },
//     { path: "/profile", element: <Profile /> }
//   ],
//   { basename: "/TwitterPtoj2" } // Matches repo name to avoid routing 404s
// );
const routerBasename = import.meta.env.MODE === 'production' ? '/TwitterPtoj2' : '/';
  return (
    <>
    <TweetProvider>
      <MantineProvider>
        <Router basename={routerBasename}>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            </Routes>
          </AuthProvider>
        </Router>
      </MantineProvider>
    </TweetProvider>
    </>
    )
}

export default App
