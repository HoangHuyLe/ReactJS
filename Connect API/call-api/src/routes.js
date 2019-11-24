import React from "react";
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        component: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        component: () => <ProductActionPage />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        component: ({match}) => <ProductActionPage match={match} />
    },
    {
        path: '',
        exact: false,
        component: () => <NotFoundPage />
    },
]

export default routes;