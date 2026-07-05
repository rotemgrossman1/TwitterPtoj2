import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import { Navbar } from './components/NavBar'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core';
import { TweetProvider } from './context/TweetContext'
function App() {
  return (
    <>
    <TweetProvider>
      <MantineProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={
              <ProfilePage 
             
              />} />
          </Routes>
        </Router>
      </MantineProvider>
    </TweetProvider>
    </>
    )
}

export default App
