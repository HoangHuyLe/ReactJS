import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Forum from './components/Forum';
import NotFound from './components/NotFound';

const routes = [
      {
            path : '/',
            exact : true,
            component : () => <Home />
      },
      {
            path : '/about',
            exact : false,
            component : () => <About/>
      },
      {
            path : '/forum',
            exact : false,
            component : () => <Forum />
      },
      {
            path : '*',
            exact : false,
            component : () => <NotFound />
      }
]

export default routes;