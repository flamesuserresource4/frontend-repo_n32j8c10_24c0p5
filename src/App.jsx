import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Koperasi Merah Putih. Semua hak dilindungi.
          </div>
          <div className="flex items-center gap-4">
            <a href="#tentang" className="hover:text-gray-900">Tentang</a>
            <a href="#layanan" className="hover:text-gray-900">Layanan</a>
            <a href="#kontak" className="hover:text-gray-900">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
