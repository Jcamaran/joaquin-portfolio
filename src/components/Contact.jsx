import React, { useState } from "react";


export default function Contact() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ email, subject, message });

    const ButtonMailto = ({ mailto, label}) => {
        

    }
    };

    return (
        <section id="Contact" className=" h-auto flex items-end bg-slate-950">
            <div className=" relative py-4 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-2xl sm:text-3xl  tracking-tight font-extrabold text-center text-white dark:text-white">Contact Me</h2>
                <p className="mb-0 lg:mb-8 font-light text-center text-slate-300 dark:text-slate-300 sm:text-xl">
                    Want to collaborate? Or have a question for me? Feel free to send me an email to jcama1712@gmail.com
                </p>
                <div className=" mt-4 flex justify-center items-center space-x-4 p-0 " id='icon_section_contact'>
                        <a href="https://www.linkedin.com/in/joaquin-camaran-69b858247/"><img src="./linkedin.png" alt="" className="w-11 h-11  cursor-pointer  p-0 rounded-xl hover:bg-sky-500 transition-all ease-in-out" /></a>
                        <a href="https://github.com/jcamaran"><img src="./github.png" alt="" className="w-11 h-11  cursor-pointer rounded-xl bg-indigo-200 p-[1px] hover:bg-sky-500 transition-all ease-in-out" /></a>
                        <a href="mailto:jcama1712@gmail.com"><img src="./mail.png" alt="" className="w-11 h-11  cursor-pointer rounded-xl hover:bg-white transition-all ease-in-out" /></a>
                    
                </div>
                
                {/* <form id="email_list" onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light" 
                            placeholder="name@yahoo.com" 
                            required 
                            autoComplete="email" // Added autocomplete attribute
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Subject</label>
                        <input 
                            type="text" 
                            id="subject" 
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm " 
                            placeholder="Let me know what your message is about" 
                            required 
                            autoComplete="off" // Autocomplete can be off for subject
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your message</label>
                        <textarea 
                            id="message" 
                            rows="4" 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 " 
                            placeholder="Leave a comment..."
                            required
                            autoComplete="off" // Autocomplete can be off for message
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-400 sm:w-fit hover:border-2 "
                    >
                        Send message
                    </button>
                </form> */}
            </div>
        </section>
    );
}