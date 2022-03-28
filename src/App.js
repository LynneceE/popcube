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

      portfolioSelected={portfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}


    
      
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
