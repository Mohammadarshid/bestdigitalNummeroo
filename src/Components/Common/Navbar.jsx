import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="w-full  bg-blue-600 mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <div className="center">
          <img
            style={{
              marginRight: "25px",
              height: "40px",
              width: "200px",
            }}
            src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/67456d87b115f43b4135f2cf.png"
            alt="Logo"
            className="h-2 w-1"
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-10">
        <button className="btn" color="blue">
          Home
        </button>

        <div className="relative group">
          <a href="https://nummero.com/services/" className="btn">
            Services
          </a>
          <svg
            className=" font-semibold text-base text-left  text-[#29A9E0] h-4 w-4 inline-block overflow-hidden cursor-pointer "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>

          <div className="absolute left-0 mt-2  text-black rounded shadow-lg hidden group-hover:block">
            <div className="w-[350px] absolute left-0 mt-2 bg-[rgb(43,35,56)] ">
              <ul className="text-white-500 py-2 px-4">
                <a className="hover:w-full hover:bg-white">
                  <a
                    href="https://nummero.com/services/branding-agency-services-in-bangalore/"
                    className="text-black block px-4 py-2 hover:text-black"
                  >
                    Branding
                  </a>
                </a>

                <li className="">
                  <a
                    href="https://nummero.com/services/web-development-company-in-bangalore/"
                    className="text-white-500 block px-4 py-2"
                  >
                    Website Development
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://nummero.com/services/seo-company-in-bangalore/"
                    className="text-white-500 block px-4 py-2"
                  >
                    SEO
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://nummero.com/services/social-media-marketing-agency-in-bangalore/"
                    className="text-white-500 block px-4 py-2"
                  >
                    Social Media Marketing
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://nummero.com/services/influencer-marketing-in-bangalore/"
                    className="text-white-500 block px-4 py-2"
                  >
                    Influencer Marketing
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://nummero.com/services/logo-design-in-bangalore/"
                    className="text-white-500 block px-4 py-2"
                  >
                    Logo Design
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://nummero.com/services/digital-marketing-strategy-development/"
                    className="text-white-500 block px-4 py-2"
                  >
                    Digital Marketing Strategy Development
                  </a>
                </li>
                <li className="hover:rounded-lg">
                  <a
                    href="https://nummero.com/services/content-writing-services-in-bangalore/"
                    className="text-white-500 block px-4 py-2"
                  >
                    Content Writing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative group">
          <button className="btn">Product Suite</button>
          <svg
            className=" font-semibold text-base text-left  text-[#29A9E0] h-4 w-4 inline-block overflow-hidden cursor-pointer "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>

          {/* Dropdown Menu */}
          <div className="absolute left-0 mt-5 bg-white  text-black rounded shadow-lg hidden group-hover:block bg-[rgb(43,35,56)]">
            <ui
              href="https://nummero.com/subscription/"
              className="block text-white-500 px-4 py-2 hover:bg-gray-100"
            >
              nummero
            </ui>
            <ui
              href="https://ginee.ai/"
              className="block text-white-500 px-4 py-2 hover:bg-gray-100"
            >
              Ginee
            </ui>
          </div>
        </div>
        <a href="https://nummero.com/about/" className="btn">
          About
        </a>
        <a href="https://nummero.com/contact-us/" className="btn">
          Contact Us
        </a>
        <a href="https://nummero.com/my-account/" className="btn">
          Login / Register
        </a>
      </div>

      {/* Contact Button */}
      <div className="mr-2">
        <a
          href="tel:+917760974512"
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded-[20px] transition duration-200"
        >
          +917760974512
        </a>
      </div>
    </div>
  );
};

export default Navbar;
