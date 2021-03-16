import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon} from "react-social-icons";

export default function NavBar() {
    return(
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                <NavLink 
                to="/" 
                exact
                activeClassName="text-white"
                className="inline-flex items-center py-6 px-2 text-blue-200 hover:text-green-800 text-2xl font-bold cursive tracking-widest"
                >
                    Home
                </NavLink>
                <NavLink 
                to="/post" 
                className="inline-flex items-center py-1 px-1 my-1 rounded text-blue-200 hover:text-green-600 text-sm"
                activeClassName="text-blue-100 bg-blue-700">
                    Blog
                </NavLink>
                <NavLink 
                to="/project" 
                className="inline-flex items-center py-1 px-1 my-1 rounded text-blue-200 hover:text-green-600 text-sm"
                activeClassName="text-blue-100 bg-blue-700">
                    My Work
                </NavLink>
                <NavLink 
                to="/about" 
                className="inline-flex items-center py-1 px-1 my-1 rounded text-blue-200 hover:text-green-600 text-sm"
                activeClassName="text-blue-100 bg-blue-700">
                    About Me
                </NavLink>
                </nav>
                <div className="inline-flex py-1 px-1 my-auto">
                    <SocialIcon url="https://my.indeed.com/p/calebv-9zp52jr" className="mr-1 sm:mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/caleb-vance-9548a6178/" className="mr-1 sm:mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.youtube.com/channel/UCEHKV4cwiJFVtaATDoRNn1g/videos" className="mr-1 sm:mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}

