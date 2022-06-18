import React from 'react';
import Picasso from '../../../../images/picassoPainting.png'
import purchase from '../../../../images/purchase.png'
import admin from '../../../../images/admin.png'
import user from '../../../../images/user.png'
import firebase from '../../../../images/firebase.png'

const PicassoPainting = () => {
    return (
        <div className='mx-auto'>
            <h2 className='py-8 text-center text-5xl font-nunito'>Picasso Painting</h2>
            <div className="btn-group flex justify-center">
                <button className="btn btn-primary text-white"> <a href="https://github.com/khanmohammadimran/picasso-painting-client">Github Client</a></button>
                <button className="btn btn-accent text-white"> <a href="https://picasso-painting-474a4.web.app/">Visit Website</a></button>
                <button className="btn btn-primary text-white"> <a href="https://github.com/khanmohammadimran/picasso-painting-server">Github Client</a></button>
            </div>
            <div className='w-1/2 mx-auto'>
                <img className='drop-shadow-md py-8' src={Picasso} alt="" />
                <h4 className='pb-5 font-bold'>Picasso Painting is a paint tools inventory service website. Where different dashboards for Admin and User</h4>
                <hr />
                <img className='drop-shadow-md py-8' src={purchase} alt="" />
                <h4 className='pb-5 font-bold'>It's a MERN Application. A users can change the order quantity (increase/decrease) from the input field. The initial value of the quantity will be the minimum order quantity. However, the user won't be able to reduce the quantity below the minimum order quantity. Also a user can purchase a product, add a review and an Admin can add a product. I used React js, Express js, MongoDB, Firebase, Stripe, Heroku, Node js, Tailwind to create this website.</h4>
                <hr />
                <h4 className='italic text-center pt-8 font-bold'>Admin Dashboard</h4>
                <h4>An Admin can make another user admin. Also an Admin can add a tools which will show in the homepage</h4>
                <img className='drop-shadow-md pb-8' src={admin} alt="" />
                <h4 className='italic text-center pt-8 font-bold'>User Dashboard</h4>
                <h4>A user can see his order/ cart in this route. Also a user can give review about the tools.</h4>
                <img className='drop-shadow-md pb-8' src={user} alt="" />
                <h4 className='pb-5 font-bold'>It's a MERN Application. A users can change the order quantity (increase/decrease) from the input field. The initial value of the quantity w</h4>
                <hr />
                <img className='drop-shadow-md py-8' src={firebase} alt="" />
                <h4 className='pb-5 font-bold'>Used Email and Password Authentication and Google Sign in Authentication from Firebase and JWT (JSON Web Token). Also used React Router, React firebase hook, Swiper JS (Carousel).</h4>
            </div>
        </div>
    );
};

export default PicassoPainting;