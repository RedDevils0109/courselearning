import React from "react";
import styled from "styled-components";
import {
  Code as HtmlIcon,
  Css as CssIcon,
  Javascript as JsIcon,
} from "@mui/icons-material";
import Home from "./profile/Home";
import Info from "./profile/Info";
import Analytic from "./profile/Analytic";
const Content = ({ selectedCategory }) => {
  const renderContent = () => {
    switch (selectedCategory) {
      case "home":
        return <Home />;

      case "profile":
        return <Info />;

      case "analytics":
        return <Analytic />;
     
      case "logout":
        return <h1>Logging out...</h1>;
  
    }
  };

  return <section className="main">{renderContent()}</section>;
};

export default Content;
