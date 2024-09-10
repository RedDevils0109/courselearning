import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCoursesContext } from "../../context/courses_context";

const Home = () => {
  const [status, setStatus] = useState("All Courses"); // Default to 'In Progress'
  const { courses } = useCoursesContext();

  // Filter courses based on the selected status
  const filteredCourses = courses.filter((course) => {
    if (status === "All Courses") {
      return true; // Show all courses
    }
    return course.status === status; // Show courses matching the selected status
  });

  return (
    <HomeWrapper>
      <section className="main">
        <div className="main-top">
          <h1>Recommended Skills</h1>
        </div>
        <div className="main-skills">
          <div className="card">
            <h3>Web Development</h3>
            <p>Join Over 1 million Students.</p>
            <button>Get Started</button>
          </div>
          <div className="card">
            <h3>WordPress Development</h3>
            <p>Join Over 3 million Students.</p>
            <button>Get Started</button>
          </div>
          <div className="card">
            <h3>Machine Learning</h3>
            <p>Join Over 2 million Students.</p>
            <button>Get Started</button>
          </div>
          <div className="card">
            <h3>iOS Development</h3>
            <p>Join Over 1 million Students.</p>
            <button>Get Started</button>
          </div>
        </div>
        <section className="main-course">
          <h1>My Courses</h1>
          <div className="course-box">
            <ul>
              <li
                className={status === "In Progress" ? "active" : ""}
                onClick={() => setStatus("In Progress")}
              >
                In Progress
              </li>
              <li
                className={status === "All Courses" ? "active" : ""}
                onClick={() => setStatus("All Courses")}
              >
                All Courses
              </li>
              <li
                className={status === "Finished" ? "active" : ""}
                onClick={() => setStatus("Finished")}
              >
                Finished
              </li>
            </ul>
            <div className="course">
              {filteredCourses.map((e) => {
                return (
                  <div className="box" key={e.id}>
                    <Link
                      to={`/courses/${e.id}`}
                     
                    >
                      <h3>{e.course_name}</h3>
                    </Link>
                    <p>{e.creator}</p>
                    <img src={e.image} alt={e.course_name} />
                    {e.status && (
                      <p>
                        {e.status === "In Progress" ? "80%" : "100%"} - Progress
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  /* Main Section */
  .main {
    position: relative;
    padding: 20px;
    width: 100%;
  }

  .main-top {
    display: flex;
    width: 100%;
  }

  .main-top i {
    position: absolute;
    right: 0;
    margin: 10px 30px;
    color: rgb(110, 109, 109);
    cursor: pointer;
  }

  .main-skills {
    display: flex;
    margin-top: 20px;
  }

  .main-skills .card {
    width: 25%;
    margin: 10px;
    background: #fff;
    text-align: center;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
  }

  .main-skills .card h3 {
    margin: 10px;
    text-transform: capitalize;
  }

  .main-skills .card p {
    font-size: 12px;
  }

  .main-skills .card button {
    background: orangered;
    color: #fff;
    padding: 7px 15px;
    border-radius: 10px;
    margin-top: 15px;
    cursor: pointer;
  }

  .main-skills .card button:hover {
    background: rgba(223, 70, 15, 0.856);
  }

  .main-skills .card i {
    font-size: 22px;
    padding: 10px;
  }

  /* Courses */
  .main-course {
    margin-top: 20px;
    text-transform: capitalize;
  }

  .course-box {
    width: 100%;
    padding: 10px 10px 30px 10px;
    margin-top: 10px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
  }

  .course-box ul {
    list-style: none;
    display: flex;
  }

  .course-box ul li {
    margin: 10px;
    color: gray;
    cursor: pointer;
  }

  .course-box ul .active {
    color: #000;
    border-bottom: 1px solid #000;
  }

  .course-box .course {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    row-gap: 30px;
  }

  .box {
    width: 25%;
    padding: 10px;
    border-radius: 10px;
    background: rgb(235, 233, 233);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
    .box h3:hover {
    opacity: 0.5
    }

  .box p {
    font-size: 12px;
    margin-top: 5px;
  }

  .box button {
    background: #000;
    color: #fff;
    padding: 7px 10px;
    border-radius: 10px;
    margin-top: 1rem;
    cursor: pointer;
  }

  .box button:hover {
    background: rgba(0, 0, 0, 0.842);
  }
`;

export default Home;
