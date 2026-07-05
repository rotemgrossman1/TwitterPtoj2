import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import { Navbar } from './components/NavBar'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core';
function App() {
  const [ username, setUsername] = useState("default")
  return (
    <>
      <MantineProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage username={username}/>} />
            <Route path="/profile" element={
              <ProfilePage 
                username={username}
                setUsername={setUsername}
              />} />
          </Routes>
        </Router>
      </MantineProvider>
    </>
    )
}

export default App
