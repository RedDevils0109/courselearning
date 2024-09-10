import React from "react";
import styled from "styled-components";
import { MdMenu, MdShoppingCart, MdPortrait } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../context/sidebar_context";
import { useCartContext } from "../context/cart_context";
import { useAuthContext } from "../context/auth_context";

const Navbar = () => {
  const { total_items } = useCartContext();
  const { openSidebar } = useSidebarContext();
  const { login, logout, isLogin } = useAuthContext();
  console.log(isLogin);

  return (
    <NavbarWrapper className="bg-white flex">
      <div className="container w-100">
        <div className="brand-and-toggler flex flex-between w-100">
          <Link to="/" className="navbar-brand text-uppercase ls-1 fw-8">
            <span>I</span>learning
          </Link>

          <div className="navbar-btns flex">
            {isLogin ? (
              <>
                <Link to="/profile" className="icon-link">
                  <MdPortrait className="icon" />
                </Link>
                <Link to="/cart" className="cart-btn icon-link">
                  <MdShoppingCart className="icon" />
                  <span className="item-count-badge">{total_items}</span>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="login">Log in</button>
                </Link>
                <Link to="/signup">
                  <button className="signup">Sign up</button>
                </Link>
              </>
            )}

            <button
              type="button"
              className="sidebar-open-btn"
              onClick={openSidebar}
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  .icon-link {
    display: flex;
    align-items: center; /* Vertically center the icons */
  }

  .icon {
    height: 30px; /* Set a consistent height */
    width: 30px; /* Set a consistent width */
    margin-right: 30px;
  }
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px,
    rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand {
    font-size: 23px;
    span {
      color: var(--clr-orange);
    }
  }
  .cart-btn {
    margin-right: 18px;
    font-size: 23px;
    position: relative;
    .item-count-badge {
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .sidebar-open-btn {
    transition: all 300ms ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
  .login {
    color: #1c1d1f;
    background-color: transparent;
    border: 1px solid #1c1d1f;
    height: 2.6rem;
    padding: 0 1.1rem;
    margin: 0.3rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.02rem;
    font-size: 1.5rem;
  }
  .signup {
    color: #fff;
    background-color: transparent;
    border: 1px solid #1c1d1f;
    height: 2.6rem;
    padding: 0 1.1rem;
    margin: 0.3rem;
    background-color: #1c1d1f;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.02rem;
    font-size: 1.5rem;
  }
`;

export default Navbar;
