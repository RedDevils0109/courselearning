import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSidebarContext } from "../context/sidebar_context";
import { useCoursesContext } from "../context/courses_context";
import { useAuthContext } from "../context/auth_context";

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const { categories } = useCoursesContext();
  const { closeSidebar, isSidebarOpen } = useSidebarContext();
  const { logout, isLogin } = useAuthContext();

  const handleLogout = () => {
    logout();
    navigate("/"); // Navigate to the home page after logout
  };

  return (
    <SidebarWrapper
      className={`bg-white ${isSidebarOpen ? "show-sidebar" : ""}`}
    >
      <button
        type="button"
        className="sidebar-close-btn"
        onClick={() => closeSidebar()}
      >
        <MdClose />
      </button>
      <div className="sidebar-content">
        <ul className="sidebar-category">
          {isLogin ? (
            <li className="sidebar-link-item fw-5">
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </li>
          ) : (
            <li className="sidebar-link-item fw-5">
              <Link to={"/login"} className="sidebar-link-item fw-5">
                Login
              </Link>
            </li>
          )}
          <h6 className="fs-18">Top Categories</h6>
          {categories.map((category, idx) => (
            <li className="sidebar-link-item fw-5" key={idx}>
              <Link to={`category/${category}`}>{category.toUpperCase()}</Link>
            </li>
          ))}
          <h6 className="fs-18">Setting</h6>
          <h6 className="fs-18">Policy</h6>
          <h6 className="fs-18">Support</h6>
        </ul>
      </div>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  z-index: 10;
  height: 100%;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
  transform: translateX(100%);
  transition: var(--transition);

  &.show-sidebar {
    transform: translateX(0);
  }
  h6 {
  font-weight: bold;
 
  }

  .sidebar-close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    border: 2px solid var(--clr-black);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
  }
  .sidebar-close-btn:hover {
    background-color: var(--clr-black);
    color: var(--clr-white);
  }
  .sidebar-content {
    margin-top: 50px;
    h6 {
      margin-bottom: 16px;
    }
    .sidebar-link-item {
      font-size: 15px;
      margin-bottom: 12px;
      transition: var(--transition);

      &:hover {
        transform: translateX(6px);
        text-decoration: underline;
      }
    }
    .logout-button {
      background: none;
      border: none;
      color: var(--clr-primary);
      cursor: pointer;
      font-size: 15px;
      transition: var(--transition);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Sidebar;
