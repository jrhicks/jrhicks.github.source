import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import useScroll from 'scroll-behavior/lib/useStandardScroll';
const history = useScroll(createHistory)();
require('file?name=[name].[ext]!./index.html');

const rootRoute = {
  component: require('./Layout/Layout'),
  childRoutes: [
    require('./_Home'),
    require('./_Content')
  ]
};

ReactDOM.render(
    <Router history={history} routes={rootRoute} />,
    document.getElementById('app')
  );
