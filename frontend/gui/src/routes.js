import React from "react";
import { Routes, Route } from "react-router-dom";

import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";

const BaseRouter = () => (
  <Routes>
    <Route exact path="/" element={<ArticleList/>} />
    <Route exact path="/:articleID" element={<ArticleDetail />} />
  </Routes>
);

export default BaseRouter;