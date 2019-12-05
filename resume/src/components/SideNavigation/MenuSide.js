import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// Import antd component
import { Menu} from 'antd';

class MenuSide extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: ''
        }
    }

    componentDidMount() {
        let path = this.props.location.pathname;
        switch (path) {
            case '/':
                this.setState({
                    selectedItem: '1'
                });
                break;
            case '/education':
                this.setState({
                    selectedItem: '2'
                });
                break;
            case '/experience':
                this.setState({
                    selectedItem: '3'
                });
                break;
            case '/certification':
                this.setState({
                    selectedItem: '4'
                });
                break;
            default:
                this.setState({
                    selectedItem: '1'
                })
        }
        // Check apps in experience
        if(path.includes('/experience')){
            this.setState({
                selectedItem: '3'
            });
        }
    }

    onChangeItem = (key) => {
        this.setState({
            selectedItem: key
        })
    }

    render() {
        //console.log(this.state.selectedItem);
        return (
            <div>
                <Menu theme="dark" selectedKeys={[this.state.selectedItem]} mode="inline" >
                    <Menu.Item key="1" style={{ fontSize: '18px' }} onClick={() => this.onChangeItem('1')}>
                        <Link to='/'>
                            <i className="fas fa-columns"></i>
                            <span style={{ marginLeft: "5px" }}> Overview </span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" style={{ fontSize: '18px' }} onClick={() => this.onChangeItem('2')}>
                        <Link to='/education'>
                            <i className="fas fa-university"></i>
                            <span style={{ marginLeft: "5px" }}> Education </span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" style={{ fontSize: '18px' }} onClick={() => this.onChangeItem('3')}>
                        <Link to='/experience'>
                            <i className="fas fa-tasks"></i>
                            <span style={{ marginLeft: "5px" }}> Experience</span>
                        </Link>
                    </Menu.Item>                   
                    <Menu.Item key="4" style={{ fontSize: '18px' }} onClick={() => this.onChangeItem('4')}>
                        <Link to='/certification'>
                            <i className="fas fa-certificate"></i>
                            <span style={{ marginLeft: "5px" }}> Certification</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>

        );
    }
}

export default withRouter(MenuSide);


