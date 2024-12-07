import React, { useState } from "react";
import "../App.css";
import "../assets/styles/style.css";
import logo from "../assets/images/logo.png";
import mail from "../assets/images/gmail.jpg";
import { Link } from "react-router-dom";

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible); // Toggle mobile menu visibility
  };

  return (
    <div>
      <nav className="nav-container">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mm">
          <div className="relative flex h-16 items-center ff">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuVisible} // Set aria-expanded based on mobile menu state
                onClick={toggleMobileMenu} // Toggle mobile menu on click
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src={logo} alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 text-white"
                    aria-current="page"
                  >
                    HOME
                  </Link>
                  <Link
                    to="/programs"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 text-white"
                  >
                    PROGRAMS
                  </Link>
                  <div
                    className="relative inline-block text-left"
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                  >
                    {/* <button
                      type="button"
                      className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 text-white"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      TRAININGS
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {isDropdownVisible && (
                      <div
                        className="dropdown-menu absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                      >
                        <div className="py-1" role="none">
                          <Link
                            to="/trainings/institutional"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex="-1"
                          >
                            INSTITUTIONAL TRAININGS
                          </Link>
                          <Link
                            to="/trainings/corporate"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex="-1"
                          >
                            CORPORATE TRAININGS
                          </Link>
                        </div>
                        <div className="py-1" role="none">
                          <Link
                            to="/trainings/government"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex="-1"
                          >
                            GOVERNMENT TRAININGS
                          </Link>
                          <Link
                            to="/trainings/more"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex="-1"
                          >
                            MORE...
                          </Link>
                        </div>
                      </div>
                    )} */}
                  </div>
                  
                  <Link
                    to="/aboutus"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 text-white"
                  >
                    ABOUT US
                  </Link>
                  <Link
                    to="/contactus"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 text-white"
                  >
                    CONTACT US
                  </Link>
                  <Link
                    to="/certificate"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 text-white"
                  >
                    CERTIFICATE VERIFICATION
                  </Link>
                  <Link className="rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 text-white">
                  REGISTRATION
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <div className="relative ml-3">
                <div>
                  <a href="mailto:vijesh@saharakerala.com">
                    <button
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src={mail} alt="" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuVisible && (
        <div className="sm:hidden toggle" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 text-white"
            >
              HOME
            </Link>
            <Link
              to="/programs"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 text-white"
            >
              PROGRAMS
            </Link>
            <Link
              to="/aboutus"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 text-white"
            >
              ABOUT US
            </Link>
            <Link
              to="/contactus"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 text-white"
            >
              CONTACT US
            </Link>
            <Link
              to="/certificate"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 text-white"
            >
              CERTIFICATE VERIFICATION
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
