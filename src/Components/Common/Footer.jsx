import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" mt-6 text-white-500 px-[32px] min-h-auto  bg-blue-600">
        <div className="mt-2 text-[18px] leading-[22.4px]] text-left align-middle text-[#9B96B0] h-[70px] w-[384px] inline-block ">
          <img src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/67456d87b115f43b4135f2cf.png" />
        </div>
        <div
          className="font-family-inter text-base leading-relaxed text-decoration-none tracking-normal 
        bg-white bg-position-0-0 text-989680 h-67 w-96 display-block transition-all box-border"
        >
          <p>
            Transforming Ideas into Digital Excellence. Elevate your online
            presence with our innovative solutions and strategic digital
            services.
          </p>
          <div className="flex items-center mt-3 justify-center ">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Nummeroindia"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/_nummero"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+917760974512&text=Hello"
                className="text-gray-400 hover:text-white"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/_nummero/"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/nummero"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com/channel/UC-WvFAEiJX4PrXicXFGYiig/featured"
                className="text-gray-400 hover:text-white"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="flex  md:grid-cols-4 gap-4 tracking-wide text-gray-100 text-base font-semibold">
          <div className=" float-start ml-[25rem] mr-6  text-base font-semibold">
            <h3 className="-mt-[166px] bg-white font-inter transition-all transform-none ">
              Services
            </h3>
            <ul className="list-none mt-0 space-y-2">
              <li>
                <a
                  href="https://nummero.com/services/branding-agency-services-in-bangalore/"
                  className="transition-all duration-500 ease-in-out"
                >
                  Branding
                </a>
              </li>
              <li>
                <a
                  href="https://nummero.com/services/web-development-company-in-bangalore/"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Website-Development
                </a>
              </li>
              <li>
                <a
                  href="https://nummero.com/services/best-seo-agency-in-bangalore/"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Seo
                </a>
              </li>
              <li>
                <a
                  href="https://nummero.com/services/social-media-marketing-agency-in-bangalore/"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Social Media Management
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="-mt-[166px] bg-white font-inter transition-all transform-none ">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://nummero.com/services/influencer-marketing-services-in-usa/"
                  className="hover:text-gray-400 transition-all duration-500 "
                >
                  Influencer Marketing
                </a>
              </li>
              <li>
                <a
                  href="https://nummero.com/services/digital-marketing-strategy-development/"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Digital Marketing Strategy
                </a>
              </li>
              <li>
                <a
                  href="https://nummero.com/services/logo-design-services-in-usa/"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Logo Design
                </a>
              </li>
              <li>
                <a
                  href="https://nummero.com/services/content-writing-services-in-bangalore/"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Content Writing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="-mt-[166px]  bg-white font-inter  leading-[22.4px] relative flex transition-all duration-300 transform-none shadow-non">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://nummero.com/about/"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://nummero.com/subscription/"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Product Suite
                </a>
              </li>
              <li>
                <a
                  href="https://nummero.com/blog/"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://nummero.com/contact-us/"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Customer Support
                </a>
              </li>

              <li>
                <a
                  href="https://nummero.com/cancellation-refund-policy/"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Cancellation & Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex">
          <div className="text-[16px]">
            <p>&copy;2024 Nummero.All rights reserved.</p>
          </div>
          <div className="text-[16px] ml-[503px]">
            <p>Privacy Policy Terms and Services</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
