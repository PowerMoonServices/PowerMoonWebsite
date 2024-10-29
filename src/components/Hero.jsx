// eslint-disable-next-line no-unused-vars
import React from 'react'

function Hero() {
    return (
        <>
            <section className="pt-24 pb-8 md:pt-32 md:pb-16 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        Boost Your Restaurant&apos;s Online Presence
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Connect with customers instantly through WhatsApp. Increase engagement and sales with custom QR codes and targeted promotions.
                    </p>
                    {/* <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                        Start Free Trial
                    </button> */}
                </div>
            </section>
        </>
    )
}

export default Hero
