import React from "react";
import * as bookmarksConfig from "../../config/bookmark-configuration.json";
import BookmarkCard from "../shared/bookmark-card/BookmarkCard";
import "./BookmarksDashboard.scss";

function BookmarksDashboard(){
    return (
      <div className="container">
          <div className="row">
              <div className="col-lg-12 dash-title">
                  <h1>Bookmarks Dashboard</h1>
              </div>
              {bookmarksConfig.bookmarks.map(bookmark => (
                  <div key={bookmark.title} className="col-lg-3">
                      <BookmarkCard title={bookmark.title} image={bookmark.image} url={bookmark.url}></BookmarkCard>
                  </div>
              ))}
          </div>
      </div>
    );
}

export default BookmarksDashboard;

