import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <MenuLink label="Trang chủ" to="/" activeOnlyWhenExact={true} />
                <MenuLink label="Liên hệ" to="/about" />
                <MenuLink label="Diễn đàn" to="/forum" />
            </ul>
        </nav>
    );
}

function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <li className={match ? "selected" : ""}>
            <Link to={to} className="nav-link" style={{ color: "gray" }}>{label}</Link>
        </li>
    );
}

export default Menu;
