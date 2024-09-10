import React from "react";
import styled from "styled-components";
import {
  Home as HomeIcon,
  AccountBox as AccountBoxIcon,
  AccountBalanceWallet as WalletIcon,
  BarChart as AnalyticsIcon,
  Task as TasksIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,
} from "@mui/icons-material";
import { useAuthContext } from "../context/auth_context";
import { Link, useNavigate } from "react-router-dom";

const SideNavBar = ({ onCategoryClick }) => {
  const navigate = useNavigate(); // Initialize the navigate function
  const { logout, isLogin } = useAuthContext();
  const handleLogout = () => {
    logout();
    navigate("/"); // Navigate to the home page after logout
  };

  return (
    <NavWrapper>
      <nav>
        <ul>
          <li>
            <a href="#" className="logo">
              <img src="/logo.png" alt="" />
              <span className="nav-item">Welcome Home, Master!</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => onCategoryClick("home")}>
              <HomeIcon />
              <span className="nav-item">Home</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => onCategoryClick("profile")}>
              <AccountBoxIcon />
              <span className="nav-item">Profile</span>
            </a>
          </li>
          
          <li>
            <a href="#" onClick={() => onCategoryClick("analytics")}>
              <AnalyticsIcon />
              <span className="nav-item">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => onCategoryClick("tasks")}>
              <TasksIcon />
              <span className="nav-item">Tasks</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => onCategoryClick("settings")}>
              <SettingsIcon />
              <span className="nav-item">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout" onClick={() => handleLogout()}>
              <LogoutIcon />
              <span className="nav-item">Log out</span>
            </a>
          </li>
        </ul>
      </nav>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  flex: 0 0 20%;
  background: #fff;
  max-height: 100vh;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .logo {
    text-align: center;
    display: flex;
    margin: 10px 0 0 10px;
  }

  .logo img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  .logo span {
    font-weight: bold;
    padding-left: 15px;
    font-size: 18px;
    text-transform: uppercase;
  }

  a {
    color: rgb(85, 83, 83);
    font-size: 14px;
    display: block;
    padding: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  .nav-item {
    margin-left: 10px;
  }

  a:hover {
    background: #eee;
  }

  .logout {
    position: absolute;
    bottom: 0;
  }
`;

export default SideNavBar;
