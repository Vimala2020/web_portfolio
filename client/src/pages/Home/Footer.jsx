import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <div>
            <div className='w-full h-1 bg-gray-600 mt-20'></div>
            <div className='py-8 bg-primary'>
                <div className='flex flex-col items-center justify-center mt-4 text-xl'>
                    <p className="text-gray-900 text-center">Designed and Developed by</p>
                    <div className='flex gap-5'> 
                    <p className="text-secondary text-center font-bold mt-2 mb-3" id='name'>Vimala Gandhi</p>
                      <FontAwesomeIcon icon={faCopyright} className="text-gray-900 mt-2" />
                    </div>
                   
                    <p>Thanks For Your Time..! <FontAwesomeIcon icon={faCoffee} /></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

