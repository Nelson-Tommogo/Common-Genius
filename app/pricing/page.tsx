"use client";
import Link from 'next/link';

const services = [
  {
    id: 1,
    category: "Mobile App Development",
    price: "$1,500 - $10,000+",
    description: "iOS, Android, and cross-platform apps from basic to enterprise level."
  },
  {
    id: 2,
    category: "Web Development",
    price: "$2,000 - $12,000+",
    description: "Responsive websites, web apps, and complex platforms from basic to enterprise."
  },
  {
    id: 3,
    category: "Blockchain Development",
    price: "$5,000 - $25,000+",
    description: "Smart contracts, DApps, DeFi, and custom blockchain solutions."
  },
  {
    id: 4,
    category: "Cybersecurity",
    price: "$2,500 - $15,000+",
    description: "Security assessments, penetration testing, and security monitoring."
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-12">
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
              Flexible pricing for different project needs. 
              <span className="block mt-1">Let's discuss your specific requirements.</span>
            </p>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service) => (
            <Link href="/contacts" key={service.id}>
              <div className="bg-white rounded-lg md:rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    {service.category}
                  </h3>
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