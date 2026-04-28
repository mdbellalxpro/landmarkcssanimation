// import search bar
import { IoSearch } from "react-icons/io5";

import "./searchbar.css";
const searchbar = () => {
  return (
    <div>
      <div className="searchbar-container">
        <div className="search-bar">
          <div className="content">
            <div className="search-bar">
              <div className="inut">
                <input type="search" placeholder="Search..." />
              </div>
              <div className="search-icon">
                <IoSearch className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default searchbar;
