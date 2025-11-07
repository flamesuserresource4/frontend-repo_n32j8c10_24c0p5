import React from 'react';
import { Home, Users, Shield, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-red-600 text-white grid place-items-center font-bold">KM</div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold tracking-tight">Koperasi Merah Putih</span>
              <span className="text-xs text-gray-500">Bersama, Kita Sejahtera</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#beranda" className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-2"><Home size={18}/> Beranda</a>
            <a href="#tentang" className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-2"><Users size={18}/> Tentang</a>
            <a href="#layanan" className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-2"><Shield size={18}/> Layanan</a>
            <a href="#kontak" className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-2"><Phone size={18}/> Kontak</a>
          </div>
          <a href="#daftar" className="inline-flex items-center px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors text-sm font-medium">Gabung Anggota</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;