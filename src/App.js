import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Contact></Contact>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;
