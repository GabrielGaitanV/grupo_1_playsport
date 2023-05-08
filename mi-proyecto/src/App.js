import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Main from './components/main'

function App(props) {
  return (
    <div >
      <body>
        <header>
          <div>
            <Navbar />
          </div>
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <div>
            <Footer />
          </div>
        </footer>
      </body>
    </div>
  );
}

export default App;

