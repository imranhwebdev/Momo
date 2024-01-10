import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Bridge from './pages/Bridge';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/bridge' element={<Bridge />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
