import React from 'react';
import hiking from '../../../../images/hiking.png'
import purchase from '../../../../images/equipmentPurchase.png'
import add from '../../../../images/addEquipment.png'
import login from '../../../../images/hikinglogin.png'
import myitem from '../../../../images/myEquipment.png'
import all from '../../../../images/allEquipmentItem.png'

const HikingGear = () => {
    return (
        <div className='mx-auto'>
            <h2 className='py-8 text-center text-5xl font-nunito'>Hunting Hiking Gear</h2>
            <div class="btn-group flex justify-center">
                <button class="btn btn-primary text-white"> <a href="https://github.com/khanmohammadimran/hunting-hiking-gear">Github Client</a></button>
                <button className="btn btn-accent text-white"> <a href="https://hiking-equipment-outdoor-gear.web.app/">Visit Website</a></button>
                <button class="btn btn-primary text-white"> <a href="https://github.com/khanmohammadimran/hunting-hiking-gear-server">Github Client</a></button>
            </div>
            <div className='w-1/2 mx-auto'>
                <img className='drop-shadow-md py-8' src={hiking} alt="" />
                <h4 className='pb-5 font-bold'>Hunting Hiking Gear is a Hiking Equipments inventory service website. Here you can buy many equipment by determining the quantity </h4>
                <hr />
                <img className='drop-shadow-md py-8' src={purchase} alt="" />
                <h4 className='pb-5 font-bold'>It's a MERN Application. You can deliver the equipment or you can increase the quantity of equipment if you want from the input field. The changes in quantity will appear on the homepage.</h4>
                <hr />
                <img className='drop-shadow-md pb-8' src={add} alt="" />
                <h4 className='pb-5 font-bold'>You can add another equipment service from by filling up the form.</h4>
                <img className='drop-shadow-md pb-8' src={login} alt="" />
                <h4 className='pb-5 font-bold'>Used Email and Password Authentication and Google Sign in Authentication from Firebase and JWT (JSON Web Token). Also used React Router, React firebase hook, Swiper JS (Carousel).</h4>
                <hr />
                <img className='drop-shadow-md py-8' src={myitem} alt="" />
                <h4 className='pb-5 font-bold'>You can see the equipment that you have selected in My Item route</h4>
                <hr />
                <img className='drop-shadow-md py-8' src={all} alt="" />
                <h4 className='pb-5 font-bold'>On the Manage Inventories route you will see all the equipments. But in homepage you will see 6 item.</h4>
            </div>
        </div>
    );
};

export default HikingGear;