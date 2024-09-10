import React from "react";
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Recommend from "../components/Recommend";

const HomePage = () => {
  return (
    <div className="holder">
      <Hero />
      <CoursesList />
      <Recommend />
      <CategoriesList />
    </div>
  );
};

export default HomePage;
