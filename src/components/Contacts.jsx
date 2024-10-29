// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

function Contacts() {

    const ContactInfo = ({ icon, text, href }) => (
        <div className="flex items-center space-x-3 p-4 bg-slate-700 rounded-lg">
            <div className="text-blue-400">{icon}</div>
            <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">{text}</a>
        </div>
    );

    ContactInfo.propTypes = {
        icon: PropTypes.node.isRequired,
        text: PropTypes.string.isRequired,
        href: PropTypes.string // Only for links like social media
    };

    return (
        <>
            <section id="contact" className="py-12 md:py-24 px-4 bg-slate-800">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
                    <div className="max-w-xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <ContactInfo icon={<Phone size={20} />} text="+91 81809 33916" />
                            <ContactInfo icon={<Mail size={20} />} text="powermoonservices@gmail.com" />
                            <ContactInfo icon={<Facebook size={20} />} text="Facebook" href="https://www.facebook.com/profile.php?id=61566773793821" />
                            <ContactInfo icon={<Instagram size={20} />} text="Instagram" href="https://www.instagram.com/PowerMoonServices" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts;
