import React, { useState, useEffect } from 'react';
import usman from '../Assets/image.png';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    if (isMobile) setIsOpen(false);
  };

  const isActive = (path) => {
    return activeLink === path || location.pathname === path;
  };

  const links = [
    { path: '/', name: 'Home', icon: 'M3 9.75L12 3l9 6.75M4.5 10.5v9.75a.75.75 0 00.75.75h4.5v-6h4.5v6h4.5a.75.75 0 00.75-.75V10.5' },
    { path: '/about', name: 'About', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0' },
    { path: '/projects', name: 'Projects', icon: 'M3.75 3v16.5a.75.75 0 00.75.75h15a.75.75 0 00.75-.75V3M3.75 3h16.5M3.75 3L12 13.5 20.25 3' },
    { path: '/stack', name: 'Stack', icon: 'M3.75 7.5L12 3l8.25 4.5-8.25 4.5L3.75 7.5z M3.75 12l8.25 4.5 8.25-4.5 M3.75 16.5l8.25 4.5 8.25-4.5' },
    { path: '/contact', name: 'Contact', icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.994 1.875l-7.5 5.25a2.25 2.25 0 01-2.512 0l-7.5-5.25A2.25 2.25 0 012.25 6.993V6.75' }
  ];

  const socialLinks = [
    { path: '/twitter', name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1a9.03 9.03 0 01-2.84 1.08A4.52 4.52 0 0016.11.9c-2.4 0-4.35 2.05-4.35 4.58 0 .36.04.72.12 1.06A12.94 12.94 0 013 2.11a4.61 4.61 0 001.42 6.1A4.41 4.41 0 012 7.1v.06c0 2.23 1.51 4.09 3.53 4.52a4.47 4.47 0 01-2.04.08 4.51 4.51 0 004.23 3.23A9.06 9.06 0 012 19.54 12.88 12.88 0 008.29 21c7.55 0 11.68-6.45 11.68-12.06 0-.18-.01-.36-.02-.53A8.48 8.48 0 0023 3z' },
    { path: '/linkedin', name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 4a2 2 0 100-4 2 2 0 000 4z' },
    { path: '/frammar', name: 'Frammer', icon: 'M5 2h14v7h-7l7 7v7h-7l-7-7h7v-7H5V2z' },
    { path: '/instagram', name: 'Instagram', icon: 'M12 2a10 10 0 0110 10v7a3 3 0 01-3 3H5a3 3 0 01-3-3v-7A10 10 0 0112 2zm0 8a2 2 0 100 4 2 2 0 000-4zm0 0a2 2 0 100 4 2 2 0 000-4zm-6 2a6 6 0 1112 0 6 6 0 01-12 0z' }
  ];

  const renderSidebarContent = () => (
    <div className='flex flex-col h-full'>
      {/* Profile Section */}
      <div className='flex space-x-3 mx-auto items-center p-2 sm:p-0'>
        <div>
          <img
            src={usman}
            alt='profile pic'
            className='h-10 w-10 sm:h-12 sm:w-12 rounded-[50%] object-center'
          />
        </div>
        <div className='space-y-1'>
          <h1 className='font-[500] text-[16px] sm:text-[20px] leading-[18px] sm:leading-[22px]'>
            Usman Hanif
          </h1>
          <p className='font-[400] text-[10px] sm:text-[12px] text-[#4d4d4d] leading-[12px] sm:leading-[14px]'>
            Website Developer
          </p>
        </div>
      </div>

      {/* Main Links */}
      <div className='flex flex-col w-[90%] sm:w-[80%] mx-auto space-y-1 sm:space-y-2 my-4 sm:my-7'>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => handleLinkClick(link.path)}
            className={`${isActive(link.path) ? 'font-[500]' : 'font-[400] hover:bg-gray-100'} py-2 sm:py-3 px-1 rounded-md text-[12px] sm:text-[14px] text-[#4d4d4d] leading-[15px] sm:leading-[17px] flex justify-between group relative`}
          >
            <div className='flex space-x-1 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={isActive(link.path) ? 2 : 1.5}
                stroke='currentColor'
                className='w-3 h-3 sm:w-4 sm:h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d={link.icon}
                />
              </svg>
              <h1 className={isActive(link.path) ? 'font-[500]' : ''}>{link.name}</h1>
            </div>

            <div className='flex items-center'>
              {isActive(link.path) ? (
                <span className='text-gray-600'>•</span>
              ) : (
                <span className='absolute right-2 top-1/2 -translate-y-1/2 transform translate-x-[-10px] opacity-0 duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
                    strokeLinejoin="round" className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-gray-600">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      <span className='w-[90%] sm:w-[80%] mx-auto mb-3 sm:mb-5 h-[1px] bg-gray-100 text-gray-100'></span>

      {/* Social Links */}
      <div className='flex flex-col w-[90%] sm:w-[80%] mx-auto space-y-1 sm:space-y-2 mb-4'>
        {socialLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => handleLinkClick(link.path)}
            className={`${isActive(link.path) ? 'font-[500]' : 'font-[400] hover:bg-gray-100'} py-2 sm:py-3 px-1 rounded-md text-[12px] sm:text-[14px] text-[#4d4d4d] leading-[15px] sm:leading-[17px] flex justify-between group relative`}
          >
            <div className='flex space-x-1 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                stroke='currentColor'
                strokeWidth={isActive(link.path) ? 2 : 1.5}
                className='w-3 h-3 sm:w-4 sm:h-4'
                viewBox='0 0 24 24'
              >
                <path d={link.icon} />
              </svg>
              <h1 className={isActive(link.path) ? 'font-[500]' : ''}>{link.name}</h1>
            </div>

            <div className='flex items-center'>
              {isActive(link.path) ? (
                <span className='text-gray-600'>•</span>
              ) : (
                <span className='absolute right-2 top-1/2 -translate-y-1/2 transform translate-x-[-10px] opacity-0 duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
                    strokeLinejoin="round" className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-gray-600">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (always visible) */}
      {!isMobile && (
        <div className='bg-[#FFFFFF] rounded-md pt-3 w-full h-full'>
          {renderSidebarContent()}
        </div>
      )}

      {/* Mobile Toggle Button */}
      {isMobile && (
        <button 
          className="fixed top-7 right-4 z-50 p-2 rounded-md bg-white shadow-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={15} /> : <FiMenu size={15} />}
        </button>
      )}

      {/* Mobile Sidebar (animated) */}
      {isMobile && (
        <div 
          className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        >
          <div 
            className={`absolute right-0 top-0 h-full w-3/4 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className='bg-[#FFFFFF] rounded-md pt-3 w-full h-full'>
              {renderSidebarContent()}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;