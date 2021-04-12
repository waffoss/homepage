import React from 'react';
import './App.scss';
import Search from './components/search/Search'

function App() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4 col-lg-offset-4">
                <Search></Search>
            </div>
        </div>
    </div>
  );
}

export default App;
