import React from 'react';
import Tempest from '../../../../images/tempestTravel.png'
import service from '../../../../images/travelService.png'
import login from '../../../../images/tempestLogin.png'

const TempestTravel = () => {
    return (
        <div className='mx-auto'>
            <h2 className='py-8 text-center text-5xl font-nunito'>Tempest Travel</h2>
            <div class="btn-group flex justify-center">
                <button class="btn btn-primary text-white"> <a href="https://github.com/khanmohammadimran/tempest-travel">Github</a></button>
                <button className="btn btn-accent text-white"> <a href="https://dancing-alpaca-52c555.netlify.app/">Visit Website</a></button>
            </div>
            <div className='w-1/2 mx-auto'>
                <img className='drop-shadow-md py-8' src={Tempest} alt="" />
                <h4 className='pb-5 font-bold'>Tempest Travel is a tourist service website. Here you Purchase any service from Packages </h4>
                <hr />
                <img className='drop-shadow-md py-8' src={service} alt="" />
                <h4 className='pb-5 font-bold'>Add dynamic route for each service. Clicking on  the route will take you the service detail.</h4>
                <hr />
                <img className='drop-shadow-md pb-8' src={login} alt="" />
                <h4 className='pb-5 font-bold'>Implement Firebase for Authentication. You can sign in with Email also with Google too. You can change or reset your password.</h4>
            </div>
        </div>
    );
};

export default TempestTravel;