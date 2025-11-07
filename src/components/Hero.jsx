import React from 'react';
import { Rocket, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white pointer-events-none"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-red-700 bg-red-50 px-3 py-1 rounded-full text-xs font-medium">
              <Star size={14}/> Koperasi Simpan Pinjam & Produsen
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Merajut Kesejahteraan Bersama Merah Putih
            </h1>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Platform penginformasian Koperasi Merah Putih: program, layanan, dan kegiatan untuk mendorong pertumbuhan ekonomi anggota serta UMKM lokal.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#daftar" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors font-medium">
                <Rocket size={18}/> Mulai Bergabung
              </a>
              <a href="#layanan" className="inline-flex items-center px-5 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
                Jelajahi Layanan
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-xs text-gray-500">Anggota aktif</div>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs text-gray-500">UMKM terbina</div>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-xs text-gray-500">Kepuasan layanan</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 p-1 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-white grid place-items-center text-center p-8">
                <div>
                  <div className="text-xl font-semibold text-gray-900">Koperasi Merah Putih</div>
                  <p className="mt-2 text-gray-600">Transparan, amanah, dan tumbuh bersama.</p>
                  <img
                    src="https://images.unsplash.com/photo-1551806235-6692cb870783?q=80&w=1200&auto=format&fit=crop"
                    alt="Ilustrasi koperasi"
                    className="mt-4 rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;