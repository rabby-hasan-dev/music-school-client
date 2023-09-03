
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target);

        emailjs.sendForm('service_uf0ck7o', 'template_n1dvzug', form.current, '0yboZlHarYx_ufsvd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="bg-gray-100 my-4 lg:p-10 dark:bg-slate-900  dark:text-gray-100">
            <h2 className="text-5xl uppercase text-center font-medium ">Contact Us </h2>
            <div className=" bg-white p-8 lg:m-36 rounded-lg dark:bg-slate-900  dark:text-gray-100">

                <h2 className=" font-semibold text-center text-red-500 my-8">Contact Us For Upcoming Class and Others challenges and opportunities</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='grid grid-cols-2 gap-4 '>
                        <div className="mb-4 dark:bg-slate-900  dark:text-gray-100">
                            <label className="block dark:text-gray-100 text-gray-700 text-sm font-bold mb-2" >
                                Name
                            </label>
                            <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='name' type="text" placeholder="Write your full name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-100" >
                                Email
                            </label>
                            <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='email' type="email" placeholder="Email" />
                        </div>
                        <div className="mb-4">
                            <label className="block dark:text-gray-100 text-gray-700 text-sm font-bold mb-2" >
                                Phone
                            </label>
                            <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='phone' type="text" placeholder="Phone Number" />
                        </div>

                        <div className="mb-4">
                            <label className="block dark:text-gray-100 text-gray-700 text-sm font-bold mb-2" >
                                Role Select
                            </label>

                            <div className="relative">
                                <select required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name='role' >
                                 
                                    <option >Students</option>
                                    <option>Instructors</option>
                                    <option>Others Public</option>
                                </select>

                            </div>
                        </div>

                    </div>
                    <div className="mb-4">
                        <label className="block dark:text-gray-100 text-gray-700 text-sm font-bold mb-2" >
                            Massage
                        </label>
                        <textarea required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Write Message here' name="message" id="" cols="30" rows="10"></textarea>
                    </div>


                    <input className='btn w-full' type="submit" value="Send" />
                </form>
            </div>

        </div>

    );
};

export default ContactUs;