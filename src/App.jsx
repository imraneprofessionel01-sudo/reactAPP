import React from 'react';
import Mycards from './component/cards/Mycard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="cards-grid">
        <Mycards name="IMRANE LAOUNI" />
        <Mycards name="SARA" />
        <Mycards name="AMINE" />
        <Mycards name="YASMINE" />
      </div>
    </div>
  );
}

export default App;