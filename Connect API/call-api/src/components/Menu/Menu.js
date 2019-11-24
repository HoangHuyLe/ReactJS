import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const menu = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lý sản phẩm',
        to: '/product-list',
        exact: true
    },
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <li className={match ? "active" : ""}>
            <Link to={to} className="nav-link" style={{ color: "gray" }}>{label}</Link>
        </li>
    );
}


class Menu extends React.Component {
    render() {
        return (
            <div className="navbar">
                <a className="navbar-brand" href="/#">Call API</a>
                <ul className="nav navbar-nav">
                    {this.showMenu()}               
                </ul>
            </div>
        )
    }

    showMenu = () => {
        let result = null;
        if (menu.length > 0) {
            result = menu.map((option, index) => {
                return (
                    <MenuLink
                        key = {index}
                        label = {option.name}
                        to = {option.to}
                        activeOnlyWhenExact = {option.exact}
                    />
                )
            })
        }        
        return result;
    }
}

export default Menu;
