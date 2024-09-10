import React from "react";
import styled from "styled-components";
import {
  Code as HtmlIcon,
  Css as CssIcon,
  Javascript as JsIcon,
} from "@mui/icons-material";
import Home from "./profile/Home";
import Info from "./profile/Info";
const Content = ({ selectedCategory }) => {
  const renderContent = () => {
    switch (selectedCategory) {
      case "home":
        return <Home />;

      case "profile":
        return <Info />;

      case "analytics":
        return <h1>Analytics Page</h1>;
      case "tasks":
        return <h1>Tasks Page</h1>;
      case "settings":
        return <h1>Settings Page</h1>;
      case "logout":
        return <h1>Logging out...</h1>;
      default:
        return <h1>Select a category</h1>;
    }
  };

  return <section className="main">{renderContent()}</section>;
};

export default Content;
