import React from "react";
import blogData from "../data/blog";

import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";
import Home from "./Home";

function App() {
  const { name, city, color, bio, links } = blogData;

  return (
    <>
      <Header />
      <Home name={name} city={city} color={color} />
      <About bio={bio} links={links} />
      <ArticleList posts={blogData.posts} />
    </>
  );
}

export default App;
