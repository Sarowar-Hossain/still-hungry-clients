import { useState, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../context/AuthContext";

const Header = () => {
  
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat&display=swap";
  document.head.appendChild(link);


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, userlogOut } = useContext(ContextProvider);
  const navigate = useNavigate();

  const logOut = () => {
    userlogOut();
  };

  const goProfile = () => {
    navigate("/user");
  };

  console.log(user);
  return (
    <div className="container mx-auto mt-5 sticky top-0 z-50 bg-white py-1">
      <div className="flex justify-between items-center">
        <div className="">
          <Link to="/">
            <h1 className="text-5xl text-orange-600 font-serif underline font-semibold text-center"
        style={{ fontFamily: "Caveat, cursive" }} title="home">
              TheChefs.com
            </h1>
          </Link>
        </div>
        <div className="hidden md:inline-flex items-center gap-5 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold underline text-2xl hover:shadow-orange-700 hover:shadow-2xl"
                : "font-bold text-2xl"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold underline text-2xl" : "font-bold text-2xl"
            }
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold underline text-2xl" : "font-bold text-2xl"
            }
            to="/about"
          >
            About
          </NavLink>

          {user ? (
            <div className="flex items-center gap-5">
              <button onClick={goProfile}>
                <img
                  className="w-[50px] ms-5 rounded-full"
                  src={user.photoURL}
                  alt=""
                  title={user.displayName}
                />
              </button>
              <button
                onClick={logOut}
                className="bg-orange-500 px-5 py-[5px] font-semibold text-white rounded hover:bg-orange-700"
              >
                SignOut
              </button>
            </div>
          ) : (
            <Link
              to="/signin"
              className="ms-5 text-white font-semibold text-2xl"
            >
              <button className="bg-orange-500 px-5 py-[5px] font-semibold text-white rounded hover:bg-orange-700">
                Sign-In
              </button>
            </Link>
          )}
        </div>
        <div className="md:hidden inline-flex items-center gap-5">
          {user && (
            <button onClick={goProfile}>
              <img
                className="w-[50px] ms-5 rounded-full"
                src={user.photoURL}
                alt=""
                title={user.displayName}
              />
            </button>
          )}
          <button
            className="text-gray-900 focus:outline-none md:hidden"
            type="button"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <title>Menu</title>
              <path d="M4 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden pt-4`}
        id="mobile-menu"
      >
        <div className="flex flex-col items-center gap-5">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold underline text-2xl" : "font-bold text-2xl"
            }
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold underline text-2xl" : "font-bold text-2xl"
            }
            to="/blog"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold underline text-2xl" : "font-bold text-2xl"
            }
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </NavLink>

          {user ? (
            <button
              onClick={() => {
                logOut();
                setIsMobileMenuOpen(false);
              }}
              className="bg-orange-500 px-5 py-[5px] font-semibold text-white rounded hover:bg-orange-700"
            >
              SignOut
            </button>
          ) : (
            <Link
              to="/signin"
              className="text-white font-semibold text-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <button className="bg-orange-500 px-5 py-[5px] font-semibold text-white rounded hover:bg-orange-700">
                Sign-In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
