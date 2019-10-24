import React from 'react';

class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nameSearch : ""
        }
    }

    onChange = (event) =>{
        this.setState({
            nameSearch : event.target.value,
        })
    }

    onShowList = ()=> {
        this.props.onShowList()
    }

    onSearch = () =>{
        this.props.onSearch(this.state.nameSearch)
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input 
                        type="text"                          
                        className="form-control" 
                        placeholder="Nhập từ khóa..." 
                        name = "nameSearch"
                        value = {this.state.nameSearch}
                        onChange = {this.onChange}
                    />

                    <span className="input-group-btn">
                        <button type="button" className="btn btn-primary" onClick={this.onSearch}><i className="fas fa-search"></i> Tìm </button>                         
                    </span>
                    <span className="input-group-btn">                        
                        <button type="button" className="btn btn-primary" onClick={this.onShowList}>Danh sách</button>
                    </span>
                    
                    
                </div>
                
            </div>
        )
    }
}

export default Search;