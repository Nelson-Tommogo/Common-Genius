"use client";
import { useState } from 'react';
import Link from 'next/link';

const serviceData = {
  mobile: {
    name: "Mobile Development",
    services: [
      {
        id: 1,
        name: "Standard Mobile App",
        price: "$1,500",
        tier: "Standard",
        description: "Single platform (iOS/Android), up to 10 screens, basic UI/UX, standard APIs, basic authentication, 3 months support."
      },
      {
        id: 2,
        name: "Premium Mobile App",
        price: "$4,500",
        tier: "Premium",
        description: "Cross-platform (iOS & Android), up to 25 screens, advanced UI/UX, custom APIs, social login, push notifications, payment gateway, 6 months support."
      }
    ]
  },
  web: {
    name: "Web Development",
    services: [
      {
        id: 1,
        name: "Standard Website",
        price: "$2,000",
        tier: "Standard",
        description: "Up to 5 pages, responsive design, basic SEO, contact form, Google Analytics, 3 months maintenance."
      },
      {
        id: 2,
        name: "Premium Web App",
        price: "$5,500",
        tier: "Premium",
        description: "Up to 20 pages, full responsive, advanced SEO, custom CMS, user authentication, e-commerce, payment gateway, 6 months maintenance."
      }
    ]
  },
  blockchain: {
    name: "Blockchain",
    services: [
      {
        id: 1,
        name: "Standard Blockchain",
        price: "$5,000",
        tier: "Standard",
        description: "Smart contract development, basic token creation (ERC-20/BEP-20), wallet integration, testnet deployment, basic security audit, 3 months support."
      },
      {
        id: 2,
        name: "Premium Blockchain",
        price: "$12,000",
        tier: "Premium",
        description: "Custom smart contracts, custom token development, NFT marketplace, multi-chain support, DeFi features, DApp development, advanced security audit, mainnet deployment, 6 months support."
      }
    ]
  },
  cybersecurity: {
    name: "Cybersecurity",
    services: [
      {
        id: 1,
        name: "Standard Security",
        price: "$2,500",
        tier: "Standard",
        description: "Security assessment, vulnerability scanning, basic penetration testing, security policy setup, SSL/TLS configuration, 3 months monitoring."
      },
      {
        id: 2,
        name: "Premium Security",
        price: "$7,500",
        tier: "Premium",
        description: "Advanced security assessment, full penetration testing, network security audit, application security review, incident response planning, security awareness training, 6 months monitoring."
      }
    ]
  }
};

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('mobile');

  const tabs = [
    { id: 'mobile', label: 'Mobile' },
    { id: 'web', label: 'Web' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'cybersecurity', label: 'Cyber Sec' }
  ];

  const currentServices = serviceData[activeTab as keyof typeof serviceData];

  return (
    <main className="min-h-screen bg-slate-50 py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="pt-20 md:pt-24 lg:pt-28 pb-6 md:pb-8">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center gap-2 mb-4 md:mb-5">
              <span className="h-[2px] w-6 md:w-10 bg-gradient-to-r from-blue-900 to-blue-600"></span>
              <span className="text-blue-900 font-semibold tracking-[0.15em] text-xs md:text-sm uppercase">
                Pricing
              </span>
              <span className="h-[2px] w-6 md:w-10 bg-gradient-to-l from-blue-900 to-blue-600"></span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-3 md:mb-4 leading-tight">
              Service Rates
            </h1>
            
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
              Choose your service category below
            </p>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-900 text-white shadow-lg shadow-blue-900/30'
                  : 'bg-white text-slate-700 hover:bg-blue-50 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Category Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-6 md:mb-8">
          {currentServices.name}
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {currentServices.services.map((service) => (
            <Link href="/contact" key={service.id}>
              <div className="bg-white rounded-lg md:rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                      {service.name}
                    </h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      service.tier === 'Premium' 
                        ? 'bg-blue-900 text-white' 
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      {service.tier}
                    </span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
                    {service.price}
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-900 font-semibold text-sm">
                    <span>Get a quote →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-slate-600 text-sm">
            Every project is unique. <span className="text-blue-900 font-semibold">Contact me</span> for a custom quote.
          </p>
        </div>
      </div>
    </main>
  );
}