import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BaseRouter from './routes';

import CustomLayout from './containers/Layout';
import ArticleList from "./containers/ArticleListView";

function App() {
  return (
    <div>
    <Router>
      <CustomLayout>
          <BaseRouter />
      </CustomLayout>
    </Router>
  </div>
  );
}

export default App;
