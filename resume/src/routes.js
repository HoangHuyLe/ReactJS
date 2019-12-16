import React from 'react';
import Overview from './views/Overview/Overview';
import Education from './views/Education/Education';
import Experience from './views/Experience/Experience';
import Certification from './views/Certification/Certification';
import Applications from './views/Applications/Applications';
import AuthContainer from './components/Authentication/AuthContainer';

const routes = [
      {
            path: '/',
            exact: true,
            component: () => <Overview />
      },
      {
            path: '/education',
            exact: false,
            component: () => <Education />
      },
      {
            path: '/experience',
            exact: true,
            component: () => <Experience />,
      },
      {
            path: '/certification',
            exact: false,
            component: () => <Certification />,
      },
      {
            path: '/experience/apps/:app/login',
            exact: true,
            component: ({match,history}) => <AuthContainer match ={match} history={history}/>
      },
      {
            path: '/experience/apps/:app',
            exact: false,
            component: ({match, history}) => <Applications match={match} history={history}/>,
      },
]

export default routes;

