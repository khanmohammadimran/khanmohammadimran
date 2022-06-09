import React from 'react';
import picassoPainting from '../../../images/picassoPainting.png'
import huntingHiking from '../../../images/huntingHiking.png'
import tempestTravel from '../../../images/tempestTravel.png'

const Projects = () => {
    return (
        <div>
            <h2 className='bg-neutral py-8 text-center text-5xl'>Portfolios</h2>
            <div className='grid lg:grid-cols-3 gap-2 justify-items-center font-nunito bg-neutral py-8'>
                <div class="card bg-white shadow-xl lg:w-96 sm:auto-cols-auto">
                    <figure class="px-10 pt-10">
                        <img src={picassoPainting} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center">
                        <h2 class="card-title text-center">Picasso Painting</h2>
                        <p className='text-center'>Project Detail:</p>
                        <ul className='list-disc'>
                            <li className='pb-2'>Picasso Painting is a MERN application where different dashboards for admin
                                and user.</li>
                            <li className='pb-2'>A user can purchase a product, add a review and an Admin can add a product.</li>
                            <li className='pb-2'>Used React js, Express js, MongoDB, Firebase, Stripe, Heroku, Node js, Tailwind.</li>
                        </ul>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary text-white">See Full Detail</button>
                            <button class="btn btn-accent"> <a href="https://picasso-painting-474a4.web.app/">Live Link</a></button>
                        </div>
                    </div>
                </div>
                <div class="card bg-white shadow-xl lg:w-96 sm:auto-cols-auto">
                    <figure class="px-10 pt-10">
                        <img src={huntingHiking} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center">
                        <h2 class="card-title text-center">Hunting Hiking Gear</h2>
                        <p className='text-center'>Project Detail:</p>
                        <ul className='list-disc'>
                            <li className='pb-2'>It's a MERN application where users can log in with Google and email.</li>
                            <li className='pb-2'>Users can delete, update and equipment.</li>
                            <li className='pb-2'>Used React js, Express js, MongoDB, Firebase, Stripe, Heroku, Node js, Tailwind.</li>
                        </ul>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary text-white">See Full Detail</button>
                            <button class="btn btn-accent"> <a href="https://hiking-equipment-outdoor-gear.web.app/">Live Link</a></button>
                        </div>
                    </div>
                </div>
                <div class="card bg-white shadow-xl lg:w-96 sm:auto-cols-auto">
                    <figure class="px-10 pt-10">
                        <img src={tempestTravel} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center">
                        <h2 class="card-title text-center">Tempest Travel</h2>
                        <p className='text-center'>Project Detail:</p>
                        <ul className='list-disc'>
                            <li className='pb-2'>Created a tourist guide service website using React.</li>
                            <li className='pb-2'>Implement Firebase for Authentications.</li>
                            <li className='pb-2'>Implement React js, React Router and Bootstrap framework.</li>
                        </ul>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary text-white">See Full Detail</button>
                            <button class="btn btn-accent"> <a href="https://dancing-alpaca-52c555.netlify.app/">Live Link</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;