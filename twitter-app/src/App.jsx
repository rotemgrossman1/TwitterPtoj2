import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import { Navbar } from './components/NavBar'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core';
import { TweetProvider } from './context/TweetContext'
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
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Router>
      </MantineProvider>
    </TweetProvider>
    </>
    )
}

export default App
