import React from 'react';
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
function Footer() {
  return (
    <footer className=" bg-black text-white py-10 px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-24">
          <div>
            <h2 className="text-xm font-bold mb-4 cursor-pointer">Company</h2>
            <ul className='leading-10 text-xm text-slate-400'>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blogs</li>
              <li>Media</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xm font-bold mb-4 cursor-pointer">Explore By Category</h2>
            <ul className='leading-10 text-xm text-slate-400 cursor-pointer'>
              <li>Smart Watches</li>
              <li>True Wireless</li>
              <li>Neckbands</li>
              <li>BT Speaker</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xm font-bold mb-4 cursor-pointer">Customer Services</h2>
            <ul className='leading-10 text-xm text-slate-400 cursor-pointer'>
              <li>Track Order</li>
              <li>Shipping Policy</li>
              <li>Software Maintenance</li>
              <li>Warranty Guidelines</li>
              <li>Terms Of Services</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xm font-bold mb-4 cursor-pointer">Support</h2>
            <ul className='leading-10 text-xm text-slate-400 cursor-pointer'>
              <li>Service Center</li>
              <li>Warranty Registration</li>
              <li>Customer Support</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
            <div className="flex justify-center mt-4 cursor-pointer mb-2 space-x-3">
                <FiFacebook className="mx-2 text-2xl"/>
                <FaXTwitter className="mx-2 text-2xl" />
                <FaInstagram className="mx-2 text-2xl" />
                <AiFillYoutube className="mx-2 text-2xl"/>
                <FaLinkedinIn className="mx-2 text-2xl" />
            </div>
          <p>Refund Policy | Privacy Policy | Terms of Service | Shipping Policy</p>
          <p>Designed & Developed by - MOHAMMED NAJMAL M T</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
