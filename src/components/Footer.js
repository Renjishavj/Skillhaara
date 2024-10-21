import React from 'react'
import "../App.css";
import ".././assets/styles/style.css";
import log from "../assets/images/logo.png"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="foot-container text-gray-400 py-8 mt-32">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <a href="#" className="text-xl font-bold text-white mb-2 inline-block">
           
            <img src={log} alt="" />
            <svg className="h-8 w-8 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
             
            </svg>
          </a>
          <p className="text-sm des-footer">
          Skill Haara is a locally voted multidisciplinary educational institution, one of the best places to study career-oriented courses.
          </p>

          <div className="mt-4 flex space-x-4">
            
            <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook className='foot-icons'/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram className='foot-icons'/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter className='foot-icons' />
            </a>
            
            <a href="#" className="text-gray-400  hover:text-white ">
            <MdEmail className='foot-icons'/>
            </a>
          </div>
        </div>
        <div className='flex flex-wrap justify-between'>
        <div className="w-full md:w-1/6 mb-6 md:mb-0 sub-foot-one">
          <h5 className="text-white font-bold mb-2">Courses</h5>
          <ul>
            <li><a href="#" className="hover:underline">Software Development</a></li>
            <li><a href="#" className="hover:underline">Industrial Automation</a></li>
            <li><a href="#" className="hover:underline">Electronic Design Automation</a></li>
            <li><a href="#" className="hover:underline">Data Science</a></li>
            <li><a href="#" className="hover:underline">Machine Learning</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 mb-6 md:mb-0 sub-foot">
          <h5 className="text-white font-bold mb-2 ">Support</h5>
          <ul>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">Guides</a></li>
            <li><a href="#" className="hover:underline">API Status</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 mb-6 md:mb-0 sub-foot">
          <h5 className="text-white font-bold mb-2">Company</h5>
          <ul>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Certificate Verification</a></li>
            <li><a href="#" className="hover:underline">Placed Students List</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 sub-foot">
          <h5 className="text-white font-bold mb-2">Legal</h5>
          <ul>
            <li><a href="#" className="hover:underline">Claim</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
          </ul>
        </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4">
        <p className="text-center text-sm">
          &copy; 2024 SkillHaara, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer
