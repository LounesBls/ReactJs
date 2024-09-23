import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layouts from './Components/Layouts';
// import Home from './Page/Home';
import Error from './Components/Error/Error';
import Display from './Components/Display/Display';

function App() {
  const [id, setId] = useState(null);

  // Takes id From App's children
  const getId = (id)=> setId(id); // Store the ID in state.
  // console.log('from app.jsx', id)

  return (
    <Router>
      <Routes>
        
        {/* Passed getId Function which is takes the id from its children */}
        <Route  element={<Layouts getId={getId} />}>
        {/* Get id From getId function and passed the value to Display component */}
          <Route path='/display' index element={<Display id={id}/>} />

          <Route path='*' element={<Error />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
