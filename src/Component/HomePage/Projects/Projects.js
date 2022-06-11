import React from 'react';
import picassoPainting from '../../../images/picassoPainting.png'
import huntingHiking from '../../../images/hiking.png'
import tempestTravel from '../../../images/tempestTravel.png'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

const Projects = () => {
    const navigate = useNavigate()
    return (
        <motion.div>
            <h2 className='bg-neutral py-8 text-center text-5xl'>Portfolios</h2>
            <motion.div initial={{ y: 200 }} animate={{ y: -10 }} transition={{ delay: 0.2, stiffness: 5 }} className='grid lg:grid-cols-3 gap-2 justify-items-center font-nunito bg-neutral py-8'>
                <div className="card bg-white shadow-xl lg:w-96 sm:auto-cols-auto">
                    <figure className="px-10 pt-10">
                        <motion.img whileHover={{ scale: 1.1 }} src={picassoPainting} alt="Shoes" className="rounded-xl border-2 p-3" />
                    </figure>
                    <div className="card-body items-center">
                        <h2 className="card-title text-center">Picasso Painting</h2>
                        <p className='text-center'>Project Detail:</p>
                        <ul className='list-disc'>
                            <li className='pb-2'>Picasso Painting is a MERN application where different dashboards for admin
                                and user.</li>
                            <li className='pb-2'>A user can purchase a product, add a review and an Admin can add a product.</li>
                            <li className='pb-2'>Used React js, Express js, MongoDB, Firebase, Stripe, Heroku, Node js, Tailwind.</li>
                        </ul>
                        <div className="card-actions justify-end">
                            <button onClick={() => navigate('/PicassoPainting')} className="btn btn-primary text-white">See Full Detail</button>
                            <button className="btn btn-accent text-white"> <a href="https://picasso-painting-474a4.web.app/">Visit Website</a></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-white shadow-xl lg:w-96 sm:auto-cols-auto">
                    <figure className="px-10 pt-10">
                        <motion.img whileHover={{ scale: 1.1 }} src={huntingHiking} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center">
                        <h2 className="card-title text-center">Hunting Hiking Gear</h2>
                        <p className='text-center'>Project Detail:</p>
                        <ul className='list-disc'>
                            <li className='pb-2'>It's a MERN application where users can log in with Google and email.</li>
                            <li className='pb-2'>Users can delete, update and equipment.</li>
                            <li className='pb-2'>Used React js, Express js, MongoDB, Firebase, Stripe, Heroku, Node js, Tailwind.</li>
                        </ul>
                        <div className="card-actions justify-end">
                            <button onClick={() => navigate('/HikingGear')} className="btn btn-primary text-white">See Full Detail</button>
                            <button className="btn btn-accent text-white"> <a href="https://hiking-equipment-outdoor-gear.web.app/">Visit Website</a></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-white shadow-xl lg:w-96 sm:auto-cols-auto">
                    <figure className="px-10 pt-10">
                        <motion.img whileHover={{ scale: 1.1 }} src={tempestTravel} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center">
                        <h2 className="card-title text-center">Tempest Travel</h2>
                        <p className='text-center'>Project Detail:</p>
                        <ul className='list-disc'>
                            <li className='pb-2'>Created a tourist guide service website using React.</li>
                            <li className='pb-2'>Implement Firebase for Authentications.</li>
                            <li className='pb-2'>Implement React js, React Router and Bootstrap framework.</li>
                        </ul>
                        <div className="card-actions justify-end">
                            <button onClick={() => navigate('/TempestTravel')} className="btn btn-primary text-white">See Full Detail</button>
                            <button className="btn btn-accent text-white"> <a href="https://dancing-alpaca-52c555.netlify.app/">Visit Website</a></button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div >
    );
};

export default Projects;