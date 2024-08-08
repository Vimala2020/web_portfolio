import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function LeftSideBar() {
  return (
    <div className='flex flex-col items-center p-4 fixed left-0 bottom-48'>
      <a
        href="https://www.facebook.com/profile.php?id=100001803017434"
        target="_blank"
        rel="noopener noreferrer"
        className='flex items-center m-2 p-2 rounded transition-all duration-300 group hover:bg-gray-800 hover:text-white'
      >
        <FontAwesomeIcon icon={faFacebook} className='text-2xl cursor-pointer' />
        <span className="ml-2 hidden group-hover:inline-block">Facebook</span>
      </a>
      <a
        href="https://github.com/Vimala2020"
        target="_blank"
        rel="noopener noreferrer"
        className='flex items-center m-2 p-2 rounded transition-all duration-300 group hover:bg-gray-800 hover:text-white'
      >
        <FontAwesomeIcon icon={faGithub} className='text-2xl cursor-pointer' />
        <span className="ml-2 hidden group-hover:inline-block">GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/vimala-rajkumar-968228300/"
        target="_blank"
        rel="noopener noreferrer"
        className='flex items-center m-2 p-2 rounded transition-all duration-300 group hover:bg-gray-800 hover:text-white'
      >
        <FontAwesomeIcon icon={faLinkedin} className='text-2xl cursor-pointer' />
        <span className="ml-2 hidden group-hover:inline-block">LinkedIn</span>
      </a>
      <a
        href="https://www.instagram.com/vimalagounder0/"
        target="_blank"
        rel="noopener noreferrer"
        className='flex items-center m-2 p-2 rounded transition-all duration-300 group hover:bg-gray-800 hover:text-white'
      >
        <FontAwesomeIcon icon={faInstagram} className='text-2xl cursor-pointer' />
        <span className="ml-2 hidden group-hover:inline-block">Instagram</span>
      </a>
    </div>
  );
}

export default LeftSideBar;
