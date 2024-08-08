import React from 'react';
import SectionTitle from '../../components/SectionTitle';

function Contact() {
    const user = {
        "name": "Vimala Gandhi",
        "age": "30",
        "gender": "female",
        "status": "married",
        "email": "vimalagounder0@gmail.com",
        "contact": "+91-9150992065",
        "country": "India"
    };

    return (
        <div className='mt-10 px-4 sm:px-6 lg:px-8'>
            <SectionTitle title="Say HELLO at..!"/>
            <div className='flex flex-col lg:flex-row items-center lg:items-start mt-10 lg:mt-20 text-lg lg:text-2xl'>
                <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
                    <div className='h-[20vh] w-full lg:h-[30vh] lg:w-auto'>
                        <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
                        <dotlottie-player
                            src="https://lottie.host/a06e55a3-c268-4cb8-9a9d-8c61584fd481/33C3fDuNay.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                            className='w-full h-full'>
                        </dotlottie-player>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-14'>
                    <div className='bg-orange-50 shadow-lg rounded-lg p-6'>
                        <p className='text-gray-700'>{'{'}</p>
                        {Object.keys(user).map((key) => (
                            <p className='ml-8 mt-2' key={key}>
                                <span className='text-gray-800 font-semibold'>{key}:</span>
                                <span className='text-gray-800 ml-2'>{user[key]}</span>
                            </p>
                        ))}
                        <p className='text-gray-700'>{'}'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
