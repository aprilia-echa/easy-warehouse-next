import { ArrowRight } from 'lucide-react'
import DashboardMockup from './dashboardmockup'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white pt-16 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 py-16 lg:py-24 min-h-[calc(100vh-64px)]">
          {/* LEFT */}
          <div className="flex-1 max-w-xl w-full mt-10">
            <h1 className="text-[30px] sm:text-[38px] lg:text-[52px] font-semibold text-gray-700 leading-[1.1] mb-4">
              Optimalkan Gudang
              <br />
              <span>Anda Dengan</span>
              <br />
              <span className="font-lora text-red-600 italic text-[55px]">
                WMS Pintar
              </span>
            </h1>

            <p className="text-[14.5px] text-gray-500 mb-8 max-w-[440px]">
              Pengelolaan inventaris Real-Time dengan QR & RFID Tanpa Ribet, 
              Dashboard Real-Time, Integrasi Langsung Ke Sistem Anda, Semua Dalam
              Satu Platform, Hindari Kehabisan Barang, Kurangi Kesalahan Picking 
              Hingga 99%
            </p>

            {/* BUTTON */}
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-7 py-4 rounded-2xl shadow-lg"
            >
              Jadwalkan Demo
              <ArrowRight size={16} />
            </a>

            {/* BADGES */}
            <div className="flex items-center gap-6 mt-10">
              {[
                '/badges/badge1.png',
                '/badges/badge2.png',
                '/badges/badge3.png',
                '/badges/badge1.png',
                '/badges/badge2.png',
                '/badges/badge3.png'
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="badge"
                  width={40}
                  height={40}
                  className="h-17 object-contain"
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
