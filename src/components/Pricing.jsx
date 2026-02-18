const plans = [
    {
        name: 'Starter',
        price: '29',
        description: 'Perfect for small gyms just getting started.',
        features: [
            'Up to 100 members',
            'Basic scheduling',
            'Payment processing',
            'Email support',
            'Mobile app access',
        ],
        popular: false,
    },
    {
        name: 'Professional',
        price: '79',
        description: 'Ideal for growing gyms that need more power.',
        features: [
            'Up to 500 members',
            'Advanced scheduling',
            'Financial reports',
            'Priority support',
            'Custom branding',
            'API access',
            'Staff management',
        ],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: '149',
        description: 'For large-scale operations and gym chains.',
        features: [
            'Unlimited members',
            'Multi-location support',
            'Advanced analytics',
            'Dedicated account manager',
            'White-label solution',
            'Custom integrations',
            'SLA guarantee',
            '24/7 phone support',
        ],
        popular: false,
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-gymfinity-100 text-gymfinity-400 text-sm font-semibold rounded-full mb-4">
                        Pricing
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
                        Simple,{' '}
                        <span className="text-gymfinity-400">transparent</span> pricing
                    </h2>
                    <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                        No hidden fees. Start with a 14-day free trial. Cancel anytime.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 ${plan.popular
                                    ? 'bg-gymfinity-900 text-white shadow-2xl shadow-gymfinity-900/30 scale-[1.03] lg:scale-105'
                                    : 'bg-white border border-gray-200 hover:border-gymfinity-400/30 hover:shadow-xl'
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                    <span className="px-4 py-1 bg-gymfinity-400 text-white text-xs font-bold rounded-full shadow-lg shadow-gymfinity-400/30">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className={`text-lg font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gymfinity-900'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-6">
                                <span className={`text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-gymfinity-900'}`}>
                                    ${plan.price}
                                </span>
                                <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>/month</span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm">
                                        <svg className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-gymfinity-400' : 'text-gymfinity-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className={plan.popular ? 'text-gray-200' : 'text-gray-600'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`block w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${plan.popular
                                        ? 'bg-gymfinity-400 text-white shadow-lg shadow-gymfinity-400/30 hover:bg-gymfinity-300 hover:shadow-xl'
                                        : 'bg-gymfinity-100 text-gymfinity-400 hover:bg-gymfinity-400 hover:text-white hover:shadow-lg hover:shadow-gymfinity-400/25'
                                    }`}
                            >
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
