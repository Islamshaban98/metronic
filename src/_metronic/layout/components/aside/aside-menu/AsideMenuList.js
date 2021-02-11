/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";


export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${
          !hasSubmenu && "menu-item-active"
        } menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
      
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/react-bootstrap",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/popovers"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/popovers">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Popovers</span>
                  </NavLink>
                </li>
               
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/progress"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/progress">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Progress</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/spinners"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/spinners">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Spinners</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/table"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/table">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Table</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/tabs"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/tabs">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Tabs</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/tooltips"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/tooltips">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Tooltips</span>
                  </NavLink>
                </li>
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/toasts"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/toasts">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Toasts</span>
                  </NavLink>
                </li>
              </ul>
            </ul>
          </div>
        </li>

        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/index",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/index">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")} />
            </span>
            <span className="menu-text">Index</span>
          </NavLink>
          <div className="menu-submenu">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Index</span>
                </span>
              </li>
              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/index/section_1"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/index/section_1">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Section_1</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/index/section_2"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/index/section_2">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Section_2</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/index/section_3"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/index/section_3">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Section_3</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/index/section_4"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/index/section_4">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Section_4</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/index/section_5"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/index/section_5">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Section_5</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/index/section_6"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/index/section_6">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Section_6</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        
        <li
          className={`menu-item ${getMenuItemActive("/builder", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/builder">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Layout Builder</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/user-profile", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/user-profile">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Add-user.svg"
                )}
              />
            </span>
            <span className="menu-text">User Profile</span>
          </NavLink>
        </li> 
      </ul>
    </>
  );
}
