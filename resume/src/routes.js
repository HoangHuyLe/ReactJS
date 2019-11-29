import React from 'react';
import Overview from './views/Overview/Overview';
import Education from './views/Education/Education';
import Experience from './views/Experience/Experience';
import Certification from './views/Certification/Certification';

const routes = [
      {
            path: '/',
            exact: true,
            component: () => <Overview/>
      },
      {
            path: '/education',
            exact: false,
            component: () => <Education/>
      },
      {
            path: '/experience',
            exact: false,
            component: () => <Experience/>
      },
      {
            path: '/certification',
            exact: false,
            component: () => <Certification/>
      }
]

export default routes;