import React from 'react';
import Search from "./Search";
import Sort from "./Sort";

class Control extends React.Component {
      render() {
            return (
                  <div>
                        <div className="row mt-20">
                              <Search />
                              <Sort />
                        </div>
                  </div>
            )
      }
}

export default Control;