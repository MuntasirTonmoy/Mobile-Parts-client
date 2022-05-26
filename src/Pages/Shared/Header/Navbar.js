import React from "react";
import logo from "../../../logo.png";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import { FiPower } from "react-icons/fi";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="navbar bg-slate-50">
        <div className="navbar-start">
          {/* Mobile */}
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold uppercase"
            >
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <hr />
              <li>
                <Link to="/myPortfolio">My Portfolio</Link>
              </li>
            </ul>
          </div>

          {/* pc */}
          <Link to="/">
            <img src={logo} className="w-[200px] hidden lg:block" alt="" />
          </Link>
          <ul className="menu menu-horizontal p-0 lg:flex hidden font-bold uppercase">
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/myPortfolio">My Portfolio</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-center  lg:hidden">
          <Link to="/">
            <img src={logo} className="w-[200px]" alt="" />
          </Link>
        </div>

        <div className="navbar-end">
          {/* mobile */}

          {!user ? (
            <>
              <div className="dropdown dropdown-end lg:hidden flex">
                <label tabIndex="0" className="btn btn-ghost btn-circle">
                  <AiOutlineLogin className="text-2xl "></AiOutlineLogin>
                </label>
                <ul
                  tabIndex="0"
                  className="mt-14  p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/login">
                      <span className=" btn-sm w-full btn-secondary rounded flex items-center justify-center gap-2 uppercase font-bold">
                        <BiLogIn className="text-2xl"></BiLogIn>
                        Login
                      </span>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/signUp">
                      <span className=" btn-sm w-full btn-primary  rounded flex items-center justify-center gap-2 uppercase font-bold">
                        <AiOutlineUserAdd className="text-2xl"></AiOutlineUserAdd>
                        Sign Up
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="dropdown dropdown-end lg:hidden flex">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://api.lorem.space/image/face?hash=33791"
                      alt=""
                    />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="mt-14 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 font-bold uppercase"
                >
                  <li>
                    <span
                      onClick={() => signOut(auth)}
                      className="pr-5 flex items-center gap-2 uppercase font-bold"
                    >
                      <FiPower className="text-2xl"></FiPower>
                      Log out
                    </span>
                  </li>
                  <hr />
                </ul>
              </div>
            </>
          )}

          {/* pc */}
          {user ? (
            <>
              <div className=" items-center gap-5 hidden lg:flex">
                <span
                  onClick={() => signOut(auth)}
                  className=" btn pr-5 btn-secondary rounded flex items-center justify-center gap-2 uppercase font-bold"
                >
                  <FiPower className="text-2xl"></FiPower>
                  Log out
                </span>

                <div className="dropdown dropdown-end">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src="https://api.lorem.space/image/face?hash=33791"
                        alt=""
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex="0"
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 font-bold uppercase"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <hr />
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="items-center gap-5 hidden lg:flex">
                <Link to="/login">
                  <span className=" btn pr-5 btn-secondary rounded flex items-center justify-center gap-2 uppercase font-bold">
                    <BiLogIn className="text-2xl"></BiLogIn>
                    Login
                  </span>
                </Link>
                <Link to="/signUp">
                  <span className=" btn pr-5 mr-3 btn-primary  rounded flex items-center justify-center gap-2 uppercase font-bold">
                    <AiOutlineUserAdd className="text-2xl"></AiOutlineUserAdd>
                    Sign Up
                  </span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
