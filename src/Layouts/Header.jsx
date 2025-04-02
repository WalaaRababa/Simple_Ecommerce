import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const {totalQuantity} = useSelector((state) => state.cart);
  
  return (
<header className="sticky top-0 bg-white dark:bg-gray-900">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <button
          onClick={() => navigate("/")}
          className="block text-teal-600 dark:text-teal-300 cursor-pointer"
        >
          <span className="sr-only">Home</span>
          <img
            className="h-32"
            src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1743633279/Blue_and_White_Simple_Monoline_Craft_Store_Logo_1_rxnnnd.png"
            alt="Nursery Paradise Logo"
          />
        </button>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <button
                onClick={() => navigate("/about")}
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 cursor-pointer"
              >
                About
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/plants")}
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 cursor-pointer"
              >
                OurPlants
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/faq")}
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 cursor-pointer"
              >
                FAQ
              </button>
            </li>

            <li>
              <div className="relative py-2">
                <div className="absolute left-3">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-teal-600 p-3 text-xs text-white">
                    {totalQuantity}
                  </p>
                </div>
                <button
                  onClick={() => navigate("/shop")}
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 cursor-pointer"
               
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mt-4 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </div>
            </li>

            <li>
              <button
                onClick={() => navigate("/blog")}
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 cursor-pointer"
              >
                Blog
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <button
              onClick={() => navigate("/")}
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-teal-500 cursor-pointer"
            >
              Login
            </button>

            <div className="hidden sm:flex">
              <button
                onClick={() => navigate("/")}
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 cursor-pointer"
              >
                Register
              </button>
            </div>
          </div>

          <div className="block md:hidden">
            <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;
