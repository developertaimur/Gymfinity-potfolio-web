import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Why Gymfinity', href: '#why-gymfinity' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact Us', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        <div className="w-9 h-9 bg-gymfinity-400 rounded-lg flex items-center justify-center shadow-md shadow-gymfinity-400/25 group-hover:shadow-lg group-hover:shadow-gymfinity-400/30 transition-all duration-300">
                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="9" width="3" height="6" rx="1" fill="currentColor" />
                                <rect x="18" y="9" width="3" height="6" rx="1" fill="currentColor" />
                                <rect x="7" y="7" width="4" height="10" rx="1.5" fill="currentColor" />
                                <rect x="13" y="7" width="4" height="10" rx="1.5" fill="currentColor" />
                                <rect x="6" y="11" width="12" height="2" fill="currentColor" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-gymfinity-400 tracking-tight">Gymfinity</span>
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gymfinity-900 hover:text-gymfinity-400 transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gymfinity-400 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Login Button */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="https://app.thegymfinity.com/login"
                            target='blank'
                            className="px-6 py-2.5 bg-gymfinity-400 text-white text-sm font-semibold rounded-full hover:bg-gymfinity-600 transition-all duration-300 shadow-md shadow-gymfinity-400/25 hover:shadow-lg hover:shadow-gymfinity-400/30 hover:-translate-y-0.5"
                        >
                            Log In
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6 text-gymfinity-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-80 pb-4' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-1 pt-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-3 text-sm font-medium text-gymfinity-900 hover:text-gymfinity-400 hover:bg-gymfinity-100/50 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://app.thegymfinity.com/login"
                            className="mx-4 mt-2 px-6 py-2.5 bg-gymfinity-400 text-white text-sm font-semibold rounded-full text-center hover:bg-gymfinity-600 transition-colors"
                        >
                            Log In
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
