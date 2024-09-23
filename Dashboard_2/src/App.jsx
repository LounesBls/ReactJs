import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Members from './pages/Members';
import Messages from './components/Messages/Messages';
import Projects from './components/Projects/Projects';
import Clients from './components/Clients/Clients';
import Plane from './components/workPlane/Plane';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='members' element={<Members />} />
          <Route path='messages' element={<Messages />} />
          <Route path='projects' element={<Projects />} />
          <Route path='clients' element={<Clients />} />
          <Route path='plane' element={<Plane />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
