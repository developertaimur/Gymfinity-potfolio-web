const stats = [
    { value: '10K+', label: 'Active Members' },
    { value: '500+', label: 'Gyms Worldwide' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4.9/5', label: 'User Rating' },
];

const benefits = [
    {
        title: 'Save 10+ Hours Per Week',
        description: 'Automate repetitive tasks like billing, scheduling, and member check-ins so you can focus on growing your business.',
    },
    {
        title: 'Increase Revenue by 30%',
        description: 'Smart insights help you identify peak hours, optimize class sizes, and retain members with targeted engagement.',
    },
    {
        title: 'Real-time Insights',
        description: 'Monitor every aspect of your gym from anywhere. Get live dashboards on attendance, revenue, and member satisfaction.',
    },
];

const WhyGymfinity = () => {
    return (
        <section id="why-gymfinity" className="py-20 lg:py-28 bg-gradient-to-b from-gymfinity-100/40 to-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gymfinity-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gymfinity-400/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-gymfinity-400/10 text-gymfinity-400 text-sm font-semibold rounded-full mb-4">
                        Why Gymfinity
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
                        Trusted by gyms{' '}
                        <span className="text-gymfinity-400">around the world</span>
                    </h2>
                    <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                        Join hundreds of gyms who have transformed their operations with GymFinity.
                    </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gymfinity-400/10 shadow-sm hover:shadow-md hover:border-gymfinity-400/30 transition-all duration-300"
                        >
                            <div className="text-3xl lg:text-4xl font-extrabold text-gymfinity-400 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Benefits */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Benefits List */}
                    <div className="space-y-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex gap-4 group">
                                <div className="flex-shrink-0 w-10 h-10 bg-gymfinity-400 rounded-xl flex items-center justify-center shadow-md shadow-gymfinity-400/20 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gymfinity-900 mb-1">{benefit.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right - Visual */}
                    <div className="relative">
                        <div className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100">
                            {/* Mini dashboard preview */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-gymfinity-400 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gymfinity-900">Revenue Growth</div>
                                    <div className="text-xs text-green-500 font-medium">↑ 23% this month</div>
                                </div>
                            </div>

                            {/* Bar Chart */}
                            <div className="flex items-end gap-2 h-40 px-2">
                                {[45, 65, 55, 80, 70, 90, 75, 95, 85, 100, 88, 92].map((height, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                        <div
                                            className="w-full rounded-t-md bg-gradient-to-t from-gymfinity-400 to-gymfinity-300 transition-all duration-500 hover:from-gymfinity-600 hover:to-gymfinity-400"
                                            style={{ height: `${height}%` }}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-2 px-1">
                                <span className="text-[10px] text-gray-400">Jan</span>
                                <span className="text-[10px] text-gray-400">Jun</span>
                                <span className="text-[10px] text-gray-400">Dec</span>
                            </div>
                        </div>

                        {/* Floating card */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-bounce-slow">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gymfinity-900">New Member</div>
                                    <div className="text-[10px] text-gray-400">Just signed up!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyGymfinity;
