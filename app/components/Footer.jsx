"use client";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Newsletter from "./Newsletter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-modalGray">
      <div className="md:flex justify-between border-b border-gray">
        <div className=" md:w-1/3 p-5">
          <h5 className="text-xl font-bold pb-5">Stay connected</h5>
          <p className="text-md font-normal pb-5">
            {`Subscribe to our newsletter for a daily dose of web content. No spam emails, promise.`}
          </p>
          <Newsletter />
          <div className="flex gap-x-5">
            <a href="https://github.com/tejxsmore" target="_blank">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/tejxsmore" target="_blank">
              <IoLogoLinkedin className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/tejxsmore" target="_blank">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="md:w-1/3 p-5">
          <h5 className="text-xl font-bold pb-5">Navigate</h5>
          <div className="flex flex-col text-light space-y-2.5">
            <a href="/" className="hover:text-blue">
              Home
            </a>
            <a href="/nft" className="hover:text-blue">
              NFTs
            </a>
            <a href="/news" className="hover:text-blue">
              News
            </a>
            <a href="/help" className="hover:text-blue">
              Help
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-2.5">
        <a href="https://github.com/tejxsmore/cryptoden">
          Cryptoden <span className="text-sm">©️</span> {currentYear}
        </a>
      </div>
    </div>
  );
}
