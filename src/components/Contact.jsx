import React, { useState } from "react";
// Importing Logos
import linkedin from "/contact/linkedin.png"
import github from  "/contact/github.png"
import mail from "/contact/mail.png"


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
                <h2 className="mb-4 text-xl sm:text-2xl  tracking-tight font-extrabold text-center text-white dark:text-white">Contact Me</h2>
                <p className="mb-0 lg:mb-8 font-light text-center text-slate-300 dark:text-slate-300 sm:text-md">
                    Want to collaborate? Or have a question for me? Feel free to send me an email to jcama1712@gmail.com
                </p>
                <div className=" mt-4 flex justify-center items-center space-x-4 p-0 " id='icon_section_contact'>
                        <a href="https://www.linkedin.com/in/joaquin-camaran-69b858247/"><img src={linkedin} alt="" className="w-11 h-11  cursor-pointer  p-0 rounded-xl hover:bg-sky-500 transition-all ease-in-out" /></a>
                        <a href="https://github.com/jcamaran"><img src={github} alt="" className="w-11 h-11  cursor-pointer rounded-xl bg-indigo-200 p-[1px] hover:bg-sky-500 transition-all ease-in-out" /></a>
                        <a href="mailto:jcama1712@gmail.com"><img src={mail} alt="" className="w-11 h-11  cursor-pointer rounded-xl hover:bg-white transition-all ease-in-out" /></a>
                    
                </div>
            </div>
        </section>
    );
}