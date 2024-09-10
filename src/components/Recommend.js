import React from "react";
import styled from "styled-components";

import { useCoursesContext } from "../context/courses_context";
import Course from "./Course";

const Recommend = () => {
  const { courses } = useCoursesContext();
  const filteredCourses = courses.filter((course) => {
    if (course.recommend === true) {
      return true; // Show all courses
    }
    return false
  });

  return (
    <CoursesListWrapper>
      <div className="container">
        <div className="courses-list-top">
          <h2>Recommended for you</h2>
        </div>

        <div className="tabs-body">
          {filteredCourses
            
            .map((course) => (
              <Course key={course.id} {...course} />
            ))}
        </div>
      </div>
    </CoursesListWrapper>
  );
};

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p {
    font-size: 1.8rem;
  }
  .tabs-body {
    margin-top: 32px;
  }
    @media screen and (min-width: 600px){
      .tabs-body{
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 992px){
      .tabs-body{
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1400px){
      .tabs-body{
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default Recommend;
