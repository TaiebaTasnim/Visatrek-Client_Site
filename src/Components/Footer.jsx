import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import icon from "../assets/icon.png"

const Footer = () => {
  return (
    <footer className="bg-[#e20934] text-white">
      {/* Top Footer */}
      <div className="container mx-auto w-[90%] px-4 py-8 flex flex-col gap-5 md:flex-row justify-between items-center ">
        {/* About Section */}
        <div className="md:w-[30%]">
        <div className="flex items-center gap-1 mb-2 justify-center">
              <img src={icon} alt="" className="w-10 h-10 " />
              <a className=" normal-case text-2xl font-bold tracking-wide font-display ">
                Visatrek
              </a>

            </div>
          <p className="text-sm text-center ">
            We are your trusted visa navigator, helping you achieve your travel
            dreams with simplified visa processes for any country.
          </p>
        </div>

        
        

        {/* Services */}
        <div className="md:w-[30%] text-center">
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="/student-visa" className="hover:text-black transition">
                Student Visa
              </a>
            </li>
            <li>
              <a href="/tourist-visa" className="hover:text-black transition">
                Tourist Visa
              </a>
            </li>
            <li>
              <a href="/business-visa" className="hover:text-black transition">
                Business Visa
              </a>
            </li>
            
          </ul>
        </div>

        {/* Contact Info */}
        <div className=" text-center">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            Email: <a href="mailto:info@visanavigator.com">info@visatrek.com</a>
          </p>
          <p className="text-sm">Phone: +880 1722 165 790</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#e20934] hover:bg-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#e20934] hover:bg-black transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#e20934] hover:bg-black transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#e20934] hover:bg-black transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#b10829] py-4">
        <div className="container mx-auto text-center text-sm">
          © {new Date().getFullYear()} Visatrek. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
