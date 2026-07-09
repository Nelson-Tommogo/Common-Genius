"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const serviceData = {
  mobile: {
    name: "Mobile Development",
    services: [
      {
        id: 1,
        name: "Starter App",
        price: "$800 - $2,000",
        tier: "Basic",
        description: "Single platform (iOS/Android), up to 8 screens, basic UI/UX, standard APIs, basic authentication, 2 months support."
      },
      {
        id: 2,
        name: "Pro App",
        price: "$3,000 - $7,000",
        tier: "Professional",
        description: "Cross-platform (iOS & Android), up to 20 screens, advanced UI/UX, custom APIs, social login, push notifications, payment gateway, 4 months support."
      }
    ]
  },
  web: {
    name: "Web Development",
    services: [
      {
        id: 1,
        name: "Essential Website",
        price: "$500 - $1,500",
        tier: "Essential",
        description: "Up to 5 pages, responsive design, basic SEO, contact form, Google Analytics, 2 months maintenance."
      },
      {
        id: 2,
        name: "Enterprise Web App",
        price: "$3,500 - $8,000",
        tier: "Enterprise",
        description: "Up to 15 pages, full responsive, advanced SEO, custom CMS, user authentication, e-commerce, payment gateway, 4 months maintenance."
      }
    ]
  },
  blockchain: {
    name: "Blockchain",
    services: [
      {
        id: 1,
        name: "Token Launch",
        price: "$2,000 - $5,000",
        tier: "Launch",
        description: "Smart contract development, basic token creation (ERC-20/BEP-20), wallet integration, testnet deployment, basic security audit, 2 months support."
      },
      {
        id: 2,
        name: "DApp Studio",
        price: "$7,000 - $15,000",
        tier: "Studio",
        description: "Custom smart contracts, custom token development, NFT marketplace, multi-chain support, DeFi features, DApp development, advanced security audit, mainnet deployment, 4 months support."
      }
    ]
  },
  cybersecurity: {
    name: "Cybersecurity",
    services: [
      {
        id: 1,
        name: "Security Audit",
        price: "$1,000 - $3,000",
        tier: "Audit",
        description: "Security assessment, vulnerability scanning, basic penetration testing, security policy setup, SSL/TLS configuration, 2 months monitoring."
      },
      {
        id: 2,
        name: "Full Shield",
        price: "$4,000 - $10,000",
        tier: "Shield",
        description: "Advanced security assessment, full penetration testing, network security audit, application security review, incident response planning, security awareness training, 4 months monitoring."
      }
    ]
  }
};

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('mobile');
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const tabs = [
    { id: 'mobile', label: 'Mobile' },
    { id: 'web', label: 'Web' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'cybersecurity', label: 'Cyber Sec' }
  ];

  const currentServices = serviceData[activeTab as keyof typeof serviceData];

  // Scroll active tab into view on mobile
  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      activeTabElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeTab]);

  return (
    <main className="min-h-screen bg-slate-50 py-6 md:py-12 px-3 md:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="pt-16 md:pt-20 lg:pt-24 pb-4 md:pb-6">
          <div className="text-center max-w-3xl mx-auto px-3">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-[2px] w-5 md:w-8 bg-gradient-to-r from-blue-900 to-blue-600"></span>
              <span className="text-blue-900 font-semibold tracking-[0.15em] text-[10px] md:text-xs uppercase">
                Pricing
              </span>
              <span className="h-[2px] w-5 md:w-8 bg-gradient-to-l from-blue-900 to-blue-600"></span>
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 leading-tight">
              Service Rates
            </h1>
            
            <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Choose your service category below
            </p>
          </div>
        </div>

        {/* Tab Bar - Scrollable on mobile with visible all tabs */}
        <div className="relative">
          <div className="flex overflow-x-auto justify-start md:justify-center gap-1.5 md:gap-2 mb-6 md:mb-8 px-1 pb-3 md:pb-0 hide-scrollbar snap-x snap-mandatory">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={(el) => { tabRefs.current[tab.id] = el; }}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-3 md:px-6 py-1.5 md:py-2 rounded-full text-[11px] md:text-sm font-medium transition-all duration-300 flex-shrink-0 snap-center ${
                  activeTab === tab.id
                    ? 'bg-blue-900 text-white shadow-lg shadow-blue-900/30 scale-105'
                    : 'bg-white text-slate-700 hover:bg-blue-50 border border-slate-200'
                }`}
                style={{ minWidth: '80px' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Gradient fade indicators on mobile */}
          <div className="absolute left-0 top-0 w-6 h-full bg-gradient-to-r from-slate-50 to-transparent pointer-events-none md:hidden"></div>
          <div className="absolute right-0 top-0 w-6 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none md:hidden"></div>
        </div>

        {/* Category Title */}
        <h2 className="text-lg md:text-xl font-bold text-slate-800 text-center mb-4 md:mb-6">
          {currentServices.name}
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {currentServices.services.map((service) => (
            <Link href="/contact" key={service.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-start gap-2 mb-1.5">
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      {service.name}
                    </h3>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap ${
                      service.tier === 'Professional' || service.tier === 'Enterprise' || service.tier === 'Studio' || service.tier === 'Shield'
                        ? 'bg-blue-900 text-white' 
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      {service.tier}
                    </span>
                  </div>
                  <div className="text-lg md:text-xl font-bold text-blue-900 mb-2">
                    {service.price}
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-3 flex items-center text-blue-900 font-semibold text-xs md:text-sm">
                    <span>Get a quote →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}