import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';



function App() {


  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] =useState(false);

  

  return (
    <div>
      <Nav

      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      


    
      
      ></Nav>
      <main>
      {!contactSelected ? (
  <>
    <About></About>
    <Portfolio></Portfolio>
  </>
) : (
    <Contact></Contact>
  )}
      </main>
    </div>
  );
}

export default App;
