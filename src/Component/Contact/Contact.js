import React from 'react';
import contact from '../../images/contact.jpg'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const handleSubmit = event => {
        event.preventDefault()

        emailjs.sendForm('service_ikx1ncg', 'template_3n9kmld', event.target, 'Fy8aOCqsiSskbK1yY').then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
        toast.success("Your submission has been received. I'll get back to you very soon.")
    }
    return (
        <div id='contact'>
            <div className="text-gray-100 px-8 py-4 font-nunito">
                <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl lg:text-5xl leading-tight text-secondary">Get in Touch!</h2>
                        </div>
                        <div className="mt-8 text-center">
                            <img src={contact} alt="" />
                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <span className="uppercase text-sm text-secondary font-bold">Full Name</span>
                                <input name='name' className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="" />
                            </div>
                            <div className="mt-8">
                                <span name='user_email' className="uppercase text-sm text-secondary font-bold">Email</span>
                                <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" />
                            </div>
                            <div className="mt-8">
                                <span className="uppercase text-sm text-secondary font-bold">Message</span>
                                <textarea name='message' className="w-full h-32 bg-gray-300 text-secondary mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                            </div>
                            <div className="mt-8">
                                <input type="submit" value="Submit" className="btn btn-primary uppercase text-sm tracking-wide bg-primary text-white p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" />
                            </div>
                        </form>
                        <Toaster />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;