import React from 'react';
import Typewriter from 'typewriter-effect';
import webDeveloper from '../../../images/web-developer.jpg'
import myResume from '../../../images/Khan-mohammad-imran-resume.pdf'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={webDeveloper} class="rounded-lg" alt='' />
                <div className='font-nunito w-1/2'>
                    <h1 class="text-5xl">Hello!</h1>
                    <span class="text-5xl">
                        <Typewriter
                            options={{
                                strings: ["I'm Imran"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                    <p class="py-6 sm:w-full">I'm a junior Full stack developer. I love to visualize ideas and make them come alive in a website. My continuous personal development makes me one of the best in the field.</p>
                    <button className="btn btn-primary text-white">
                        <a href={myResume} download="Khan-mohammad-imran-resume.pdf">
                            Download Resume
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;