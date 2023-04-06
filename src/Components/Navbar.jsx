import React from 'react';
import Buttongradient from './Buttongradient';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isMenuShown, setisMenuShown }) => {
  const menuItems = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
    { label: 'Services', url: '/services' },
    { label: 'Blog', url: '/blog' },
  ];

  return (
    <>
      {/* Desktop view */}
      <div className="hidden lg:flex justify-between items-center max-w-screen-xl mx-auto h-24 ">
        <div>
          <h1 className="text-thBlue tracking-widest text-3xl">Savvy</h1>
        </div>
        <div className="flex items-center">
          <ul className="flex ">
            {menuItems.map((item) => (
              <li
                key={item.url}
                className="p-4 duration-200 hover:text-thBlue cursor-pointer"
              >
                <a href={item.url}>{item.label}</a>
              </li>
            ))}
          </ul>
          <Buttongradient title="Get started" className="ml-8" />
        </div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden fixed w-full bg-black text-white z-10">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto h-24">
          <div>
            <h1 className="text-thBlue tracking-widest px-4 text-3xl">Savvy</h1>
          </div>
          <div onClick={() => setisMenuShown(!isMenuShown)}>
            {isMenuShown ? (
              <FaTimes size={30} className="text-white mr-4" />
            ) : (
              <FaBars size={30} className="text-white mr-4" />
            )}
          </div>
        </div>
      </div>
      {isMenuShown && (
        <div className="lg:hidden fixed w-full bg-gray-700 text-white z-20 top-24 left-0 py-12 text-center text-2xl duration-500 rounded-b-2xl opacity-95">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.url}
                className="p-4 duration-200 hover:text-thBlue cursor-pointer"
              >
                <a href={item.url}>{item.label}</a>
              </li>
            ))}
            <Buttongradient
              title="Get Savvy"
              className="mt-4 mx-auto"
            />
          </ul>
         
        </div>
      )}
    </>
  );
};

export default Navbar;
