import React from 'react';
import './App.scss';
import Search from './components/search/Search'
import BookmarksDashboard from "./components/bookmarks-dashboard/BookmarksDashboard";
import CovidTracker from "./components/covid-tracker/CovidTracker";

function App() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4 col-lg-offset-4">
                <Search></Search>
            </div>
            <div className="col-lg-2 col-lg-offset-1">
                <CovidTracker></CovidTracker>
            </div>
            <div className="col-lg-12">
                <BookmarksDashboard></BookmarksDashboard>
            </div>
        </div>
    </div>
  );
}

export default App;
