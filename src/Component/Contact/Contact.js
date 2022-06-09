import React from 'react';
import contact from '../../images/contact.jpg'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault()

        emailjs.sendForm('service_ikx1ncg', 'template_3n9kmld', event.target, 'Fy8aOCqsiSskbK1yY').then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <div class="text-gray-100 px-8 py-4 font-nunito">
                <div
                    class="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                    <div class="flex flex-col justify-between">
                        <div>
                            <h2 class="text-4xl lg:text-5xl leading-tight text-secondary">Get in Touch!</h2>
                        </div>
                        <div class="mt-8 text-center">
                            <img src={contact} alt="" />
                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <span class="uppercase text-sm text-secondary font-bold">Full Name</span>
                                <input name='name' class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="" />
                            </div>
                            <div class="mt-8">
                                <span name='user_email' class="uppercase text-sm text-secondary font-bold">Email</span>
                                <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" />
                            </div>
                            <div class="mt-8">
                                <span class="uppercase text-sm text-secondary font-bold">Message</span>
                                <textarea name='message' class="w-full h-32 bg-gray-300 text-secondary mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                            </div>
                            <div class="mt-8">
                                <input type="submit" value="Submit" class="uppercase text-sm tracking-wide bg-primary text-white p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;