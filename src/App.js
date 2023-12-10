import React from 'react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import List from './pages/List'
import Detail from './pages/Detail.jsx'


import './index.css'
// import './reset.css';

class App extends React.Component {
  render() {
    return (
<BrowserRouter>
        <div>
          <nav className="navbar">
            {/* <Link className="navbar-brand" to="#">
            cheburashka
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button> */}
            <div className="collapse" id="navbarNav">

              <ul className="navbar-nav">
                <li className="nav-item">

                  <Link className="nav-link" to="/Home">
                    Home
                  </Link>

                </li>
                <li className="nav-item">

                  <Link className="nav-link" to="/List">
                    List
                  </Link>

                </li>
                {/* <li className="nav-item">

                  <Link className="nav-link" to="/Detail">
                    Detail
                  </Link>

                </li> */}
              </ul>

            </div>
          </nav>
         <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/List" element={<List/>}/>
            <Route path="/Detail" element={<Detail/>}/>
         </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
