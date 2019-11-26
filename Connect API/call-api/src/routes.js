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
        component: ({history}) => <ProductActionPage history = {history}/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        component: ({match, history}) => <ProductActionPage match={match} history={history} />
    },
    {
        path: '',
        exact: false,
        component: () => <NotFoundPage />
    },
]

export default routes;