// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';

function HowItWorks() {

    const Step = ({ number, title, description }) => (
        <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {number}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );

    Step.propTypes = {
        number: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    };
    return (
        <>
            <section id="how-it-works" className="py-12 md:py-24 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Step number="1" title="Sign Up" description="Create your restaurant account" />
                        <Step number="2" title="Get QR Code" description="Receive your custom QR code" />
                        <Step number="3" title="Customer Scans" description="Customers scan and verify" />
                        <Step number="4" title="Send Offers" description="Share promotions via WhatsApp" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowItWorks
