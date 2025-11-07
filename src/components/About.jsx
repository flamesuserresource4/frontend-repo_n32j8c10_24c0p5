import React from 'react';

const About = () => {
  return (
    <section id="tentang" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Tentang Koperasi</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Koperasi Merah Putih berkomitmen menjadi wadah kolaborasi ekonomi kerakyatan. Kami mengedepankan nilai kebersamaan,
            transparansi, dan kemandirian untuk menciptakan kesejahteraan berkelanjutan bagi seluruh anggota.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-gray-50 p-6">
              <div className="text-sm font-semibold text-gray-900">Visi</div>
              <p className="mt-2 text-sm text-gray-600">Menjadi koperasi modern yang inklusif dan berdaya saing, mendorong ekonomi lokal yang tangguh.</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6">
              <div className="text-sm font-semibold text-gray-900">Misi</div>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Memberikan layanan finansial yang aman dan terjangkau.</li>
                <li>Mengembangkan kompetensi anggota melalui edukasi dan pelatihan.</li>
                <li>Membangun jejaring pemasaran untuk produk anggota.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;