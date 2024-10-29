// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';
import { QrCode, MessageCircle, Store } from 'lucide-react';

function Features() {

    const FeatureCard = ({ icon, title, description }) => (
        <div className="p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
            <div className="text-blue-400 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );

    FeatureCard.propTypes = {
        icon: PropTypes.node.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    };

    return (
        <>
            <section id="features" className="py-12 md:py-24 px-4 bg-slate-800">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose PowerMoon?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<QrCode size={40} />}
                            title="Custom QR Codes"
                            description="Unique QR codes for each restaurant that track customer engagement and usage"
                        />
                        <FeatureCard
                            icon={<MessageCircle size={40} />}
                            title="WhatsApp Integration"
                            description="Direct communication with customers through WhatsApp for better engagement"
                        />
                        <FeatureCard
                            icon={<Store size={40} />}
                            title="Restaurant Dashboard"
                            description="Track promotions, customer engagement, and campaign performance"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
