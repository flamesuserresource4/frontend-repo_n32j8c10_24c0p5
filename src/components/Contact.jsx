import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Pesan Anda telah dikirim. Kami akan menghubungi Anda segera.');
  };

  return (
    <section id="kontak" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900">Hubungi Kami</h3>
            <p className="mt-2 text-gray-600">Ada pertanyaan tentang keanggotaan atau layanan? Kirim pesan melalui formulir berikut.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-gray-700">Nama Lengkap</label>
                <input type="text" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-red-600 focus:border-red-600" placeholder="Nama Anda" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-red-600 focus:border-red-600" placeholder="nama@email.com" />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Nomor Telepon</label>
                  <input type="tel" className="mt-1 w-full rounded-md border-gray-300 focus:ring-red-600 focus:border-red-600" placeholder="08xxxxxxxxxx" />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-700">Pesan</label>
                <textarea rows="4" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-red-600 focus:border-red-600" placeholder="Tulis pesan Anda"></textarea>
              </div>
              <button type="submit" className="inline-flex items-center px-5 py-3 rounded-md bg-red-600 text-white hover:bg-red-700 font-medium">Kirim Pesan</button>
              {status && <p className="text-sm text-green-600 mt-2">{status}</p>}
            </form>
          </div>
          <div className="rounded-2xl p-8 bg-white border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900">Informasi Kontak</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-center gap-3"><Mail size={18} className="text-red-600"/> info@merahputih.coop</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-red-600"/> (021) 1234 5678</li>
              <li className="flex items-center gap-3"><MapPin size={18} className="text-red-600"/> Jl. Nusantara No. 45, Jakarta</li>
            </ul>
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1521417531039-95b9d3f2e26a?q=80&w=1200&auto=format&fit=crop"
                alt="Kantor Koperasi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;