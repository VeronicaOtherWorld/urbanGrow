import React from "react";
import { FaFacebookF, FaInstagram, FaUser } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import download from "@/assets/footerPic/download.png";

const Footer = () => {
  const aboutList = [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Use", url: "#" },
    { name: "Cookie Settings", url: "#" },
    { name: "About Us", url: "#" },
  ];

  return (
    <footer className="bg-[#c4c78e] w-full text-black text-sm mt-10">
      <div className="max-w-screen-xl mx-auto px-4 py-6 sm:py-10">
        {/* 主体内容布局 */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center lg:text-left">
          {/* 中屏合并版：Follow + Join */}
          <div className="md:block lg:hidden">
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">Follow Us</h2>
              <div className="flex justify-center gap-4 text-2xl">
                <FaXTwitter />
                <FaFacebookF />
                <FaInstagram />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">Join Community</h2>
              <div className="text-4xl flex justify-center">
                <FaUser />
              </div>
            </div>
          </div>

          {/* 大屏分开展示 */}
          <div className="hidden lg:block">
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex justify-start gap-4 text-2xl">
              <FaXTwitter />
              <FaFacebookF />
              <FaInstagram />
            </div>
          </div>

          <div className="hidden lg:block">
            <h2 className="text-lg font-bold mb-4">Join Community</h2>
            <div className="text-4xl">
              <FaUser />
            </div>
          </div>

          {/* About */}
          <div>
            <h2 className="text-lg font-bold mb-4">About</h2>
            <ul className="space-y-2">
              {aboutList.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p>support@urbangrow.com</p>
          </div>

          {/* Download */}
          <div>
            <h2 className="text-lg font-bold mb-4">Download</h2>
            <div className="flex flex-col items-center lg:items-start space-y-3">
              <img src={download} alt="Google Play" className="w-36 sm:w-40" />
              <img src={download} alt="App Store" className="w-36 sm:w-40" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full flex justify-center mt-6">
          <p className="text-sm font-semibold text-center">
            Copyright © {new Date().getFullYear()} UrbanGrow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
