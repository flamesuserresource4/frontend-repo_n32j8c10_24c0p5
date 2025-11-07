import React from 'react';
import { Shield, PiggyBank, HandCoins, LineChart } from 'lucide-react';

const services = [
  {
    icon: PiggyBank,
    title: 'Simpanan Anggota',
    desc: 'Pilihan simpanan harian, berjangka, dan pendidikan dengan bunga kompetitif.'
  },
  {
    icon: HandCoins,
    title: 'Pembiayaan & Pinjaman',
    desc: 'Proses cepat dan transparan untuk modal usaha maupun kebutuhan produktif.'
  },
  {
    icon: LineChart,
    title: 'Pengembangan UMKM',
    desc: 'Pendampingan bisnis, pelatihan, dan akses ke pasar agar UMKM naik kelas.'
  },
  {
    icon: Shield,
    title: 'Perlindungan & Kesejahteraan',
    desc: 'Program perlindungan dasar dan manfaat sosial bagi anggota dan keluarga.'
  },
];

const Services = () => {
  return (
    <section id="layanan" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Layanan Utama</h2>
          <p className="mt-3 text-gray-600">Dirancang untuk mendukung kebutuhan finansial dan pengembangan usaha anggota.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-red-600 text-white grid place-items-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;