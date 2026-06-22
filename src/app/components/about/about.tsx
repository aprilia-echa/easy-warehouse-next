/* eslint-disable @next/next/no-img-element */
'use client'

import {
  ShieldCheck,
  FileCheck2,
  } from 'lucide-react'

function About() {
  const securityItems = [
    {
      icon: (
        <img
          src="https://kpscertification.co.id/wp-content/uploads/2024/04/ISO-27001.webp"
          alt="ISO 27001"
          className="w-24 h-24 object-contain"
        />
      ),
      title: 'Sertifikasi ISO 27001',
      desc: 'Sistem Manajemen Keamanan Informasi Kami Telah Diaudit Secara Independen Untuk Melindungi Aset Data Anda Dari Berbagai Ancaman Siber Dengan Standar Internasional Tertinggi.'
    },

    {
      icon: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLB0bMTDSwEB6vNwfzZ467jlS_cTe8ES1Mw&s"
          alt="SOC 2"
          className="w-24 h-24 object-contain"
        />
      ),
      title: 'Kepatuhan SOC 2 Type II',
      desc: 'Bukti Nyata Komitmen Kami Dalam Menjalankan Kontrol Operasional Yang Ketat Dan Konsisten Terhadap Ketersediaan, Kerahasiaan, Serta Integritas Data Pelanggan.'
    },

    {
      icon: (
        <div className="flex items-center gap-2">
          <ShieldCheck size={42} className="text-green-400" />

          <FileCheck2 size={42} className="text-blue-400" />
        </div>
      ),

      title: 'Regulasi Privasi Data',
      desc: 'Sepenuhnya Mematuhi Regulasi Perlindungan Privasi Data Paling Ketat Di Dunia (GDPR & CCPA) Untuk Memastikan Hak Dan Kerahasiaan Informasi Pengguna Selalu Terjaga.'
    }
  ]

  return (
    <section className="w-full bg-white py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">
          {/* LEFT */}
          <div>
            <h2 className="text-[28px] md:text-[37px] leading-[1.1] font-semibold text-[#4d4747] mb-6">
              Keamanan Tingkat Enterprise,
              <br />
              Tanpa Kompromi.
            </h2>

            <p className="text-[14px] text-[#6d6d6d] leading-7 max-w-xl">
              Dirancang Dengan Teknologi Enkripsi Mutakhir Dan Sertifikasi
              Keamanan Internasional, WMS Pintar Memberikan Perlindungan
              Maksimal Untuk Setiap Bit Data Inventaris Anda.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end lg:mr-10">
            <img
              src="https://magentaldcc.com/wp-content/uploads/2021/11/warehouse_supervisor_job.jpg"
              alt="warehouse"
              className="max-w-[520px] h-[340px] object-cover rounded-[24px] w-full md:h-[340px]"
            />
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {securityItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-[26px] px-6 md:px-8 py-8 md:py-10"
            >
              <div className="mb-8 flex justify-center">{item.icon}</div>

              <h3 className="text-[22px] md:text-[28px] font-semibold text-[#2f2f2f] mb-4 leading-tight">
                {item.title}
              </h3>

              <p className="text-[14px] text-[#6b6b6b] leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default function App() {
  return (
    <>
      <About />
    </>
  )
}
