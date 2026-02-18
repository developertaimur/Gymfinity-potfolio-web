import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyGymfinity from './components/WhyGymfinity';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-white font-sans antialiased">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <WhyGymfinity />
                <Pricing />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
