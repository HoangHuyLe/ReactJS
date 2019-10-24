import React from 'react';
import Search from "./Search";
import Sort from "./Sort";

class Control extends React.Component {

      onSort = (sortBy, sortValue) =>{
            this.props.onSort(sortBy, sortValue)
      }
      render() {
            return (
                  <div>                        
                        <div className="row mt-20">
                              <Search onSearch = {this.props.onSearch} onShowList = {this.props.onShowList}/>
                              <Sort onSort= {this.onSort}/>                              
                        </div>
                  </div>
            )
      }
}

export default Control;