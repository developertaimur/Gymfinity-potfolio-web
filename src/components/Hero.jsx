// // 





// import heroDashboard from '../Assets/hero-dashboard.png';

// const Hero = () => {
//     return (
//         <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-white via-gymfinity-100/30 to-gray-50 overflow-hidden">
//             {/* Background decorative elements */}
//             <div className="absolute top-20 right-0 w-96 h-96 bg-gymfinity-400/5 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-0 left-0 w-72 h-72 bg-gymfinity-400/5 rounded-full blur-3xl"></div>

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//                     {/* Left Content */}
//                     <div className="max-w-xl">
//                         <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gymfinity-900 leading-tight tracking-tight">
//                             Boost your gym management. Start using{' '}
//                             <span className="text-gymfinity-400 relative">
//                                 Gymfinity
//                                 <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
//                                     <path d="M1 5.5C47 2 153 2 199 5.5" stroke="#3aafa9" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
//                                 </svg>
//                             </span>{' '}
//                             today!
//                         </h1>
//                         <p className="mt-6 text-base lg:text-lg text-gray-500 leading-relaxed max-w-lg">
//                             Generate clear financial reports to track revenue and expenses in real time.
//                         </p>

//                         {/* CTA Buttons */}
//                         <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                             <a
//                                 href="#contact"
//                                 className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gymfinity-400 text-white font-semibold rounded-xl hover:bg-gymfinity-600 transition-all duration-300 shadow-lg shadow-gymfinity-400/25 hover:shadow-xl hover:shadow-gymfinity-400/30 hover:-translate-y-0.5"
//                             >
//                                 Schedule Your Demo Now
//                                 <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                                 </svg>
//                             </a>
//                             <a
//                                 href="#contact"
//                                 className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-gymfinity-400 text-gymfinity-400 font-semibold rounded-xl hover:bg-gymfinity-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
//                             >
//                                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                                 </svg>
//                                 Contact for More Details
//                             </a>
//                         </div>

//                         {/* Trust Badges */}
//                         <div className="mt-6 flex items-center gap-6 text-sm text-gray-400">
//                             <span className="flex items-center gap-2">
//                                 <span className="w-2 h-2 rounded-full bg-gymfinity-400"></span>
//                                 No credit card required
//                             </span>
//                             <span className="flex items-center gap-2">
//                                 <span className="w-2 h-2 rounded-full bg-gymfinity-400"></span>
//                                 14-day free trial
//                             </span>
//                         </div>
//                     </div>

//                     {/* Right Side - Laptop Mockup */}
//                     <div className="relative flex justify-center lg:justify-end">
//                         <div className="relative w-full max-w-lg xl:max-w-xl group">
//                             <img
//                                 src={heroDashboard}
//                                 alt="GymFinity Dashboard - Gym Management Software"
//                                 className="w-full h-auto drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] group-hover:-translate-y-1"
//                             />
//                             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gymfinity-400/10 rounded-full blur-3xl"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;




import heroDashboard from '../Assets/hero-dashboard.png';

const Hero = () => {
    return (
        <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-white via-gymfinity-100/30 to-gray-50 overflow-hidden">
            
            <div className="absolute top-20 right-0 w-96 h-96 bg-gymfinity-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gymfinity-400/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    <div className="max-w-xl">
                        
                        {/* Heading */}
                        <h1 className="animate-fadeInUp text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gymfinity-900 leading-tight tracking-tight">
                            Boost your gym management. Start using{' '}
                            <span className="text-gymfinity-400 relative inline-block animate-pulse">
                                Gymfinity
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                                    <path d="M1 5.5C47 2 153 2 199 5.5" stroke="#3aafa9" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                                </svg>
                            </span>{' '}
                            today!
                        </h1>

                        {/* Paragraph */}
                        <p className="mt-6 animate-fadeInUp delay-150 text-base lg:text-lg text-gray-500 leading-relaxed max-w-lg">
                            Generate clear financial reports to track revenue and expenses in real time.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-300">
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gymfinity-400 text-white font-semibold rounded-xl hover:bg-gymfinity-600 transition-all duration-300 shadow-lg shadow-gymfinity-400/25 hover:shadow-xl hover:shadow-gymfinity-400/30 hover:-translate-y-0.5"
                            >
                                Schedule Your Demo Now
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>

                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-gymfinity-400 text-gymfinity-400 font-semibold rounded-xl hover:bg-gymfinity-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Contact for More Details
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-6 flex items-center gap-6 text-sm text-gray-400 animate-fadeInUp delay-500">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gymfinity-400"></span>
                                No credit card required
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gymfinity-400"></span>
                                14-day free trial
                            </span>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg xl:max-w-xl group">
                            <img
                                src={heroDashboard}
                                alt="GymFinity Dashboard - Gym Management Software"
                                className="w-full h-auto drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02] hover:-translate-y-1"
                            />
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gymfinity-400/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
