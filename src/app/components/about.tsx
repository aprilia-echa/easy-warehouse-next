"use client";

import { useState } from "react";
import {
  ShieldCheck,
  BadgeCheck,
  FileCheck2,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";


const brands = [
  { src: "/logos/Samsung.png", size: "h-6 md:h-8" },
  { src: "/logos/Nvidia.png", size: "h-6 md:h-8" },
  { src: "/logos/Sony.png", size: "h-6 md:h-8" },
  { src: "/logos/CocaCola.png", size: "h-6 md:h-8" },
  { src: "/logos/Nestle.png", size: "h-6 md:h-8" },
  { src: "/logos/Amazon.png", size: "h-6 md:h-8" },
  { src: "/logos/Prada.png", size: "h-8 md:h-12" },
  { src: "/logos/Victoria'sSecret.png", size: "h-8 md:h-12" },
];

const testimonials = [
  {
    brand: "Victoria Secret",
    category: "Specialty Retail (Ritel Khusus)",
    text: `"Akurasi inventaris naik menjadi 99% sejak menggunakan WMS Pintar. Tidak ada lagi drama barang hilang atau salah kirim saat audit."`,
  },

  {
    brand: "Nestle",
    category: "F&B / FMCG Manufacturing",
    text: `"Fitur pelacakan Batch dan visibilitas FEFO dari WMS Pintar menyelamatkan kami dari kerugian miliaran rupiah akibat produk expired. Standar keamanan pangan kami kini 100% terjaga."`,
  },

  {
    brand: "Amazon",
    category: "E-commerce & Logistics",
    text: `"WMS Pintar adalah otak di balik jalur delivery kami. Sistem ini mampu mengoptimalkan ribuan pesanan per jam dengan akurasi mencapai 99.8%."`,
  },

  {
    brand: "Sony",
    category: "Technology",
    text: `"Monitoring stok menjadi jauh lebih cepat dan real-time. Tim operasional kami kini bekerja lebih efisien."`,
  },

  {
    brand: "Samsung",
    category: "Electronics",
    text: `"Integrasi dashboard dan tracking RFID sangat membantu proses distribusi skala besar."`,
  },
];

function BrandSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section
      id="about"
      className="w-full bg-gray-200 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-[48px] md:text-[48px] font-semibold text-[#4b4545] leading-tight">
            Mengapa Brand Global Memilih
            <br />
            <span className="text-red-700 italic font-serifDisplay">
              WMS Pintar?
            </span>
          </h2>

          <p className="text-[14px] text-[#6a6a6a] mt-4">
            Dari Ritel Hingga Manufaktur, Lihat Langsung Bagaimana Kami
            Mentransformasi Rantai Pasok Mereka.
          </p>
        </div>

        {/* MOVING BRAND */}
        <div className="overflow-hidden py-8 mb-14">
          <div className="flex w-max animate-marquee items-center gap-10 md:gap-20">
            {[...brands, ...brands].map((brand, i) => (
              <img
                key={i}
                src={brand.src}
                alt="brand"
                className={`${brand.size} w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
              />
            ))}
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="relative overflow-hidden">

          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full bg-white rounded-[16px] p-6 md:p-8 min-h-[260px] flex flex-col justify-between shadow-sm"
              >
                <p className="text-[13px] md:text-[14px] text-[#555] leading-7 md:leading-8 mb-8">
                  {item.text}
                </p>

                <div>
                  <h3 className="font-semibold text-[15px] text-[#2f2f2f]">
                    {item.brand}
                  </h3>

                  <p className="text-[12px] text-[#7a7a7a] mt-1">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="flex items-center justify-between mt-10">

            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="group w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-200 hover:border-red-600 disabled:opacity-40"
            >
              <ChevronLeft
                size={20}
                className="text-gray-400 group-hover:text-red-600"
              />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex === testimonials.length - 3}
              className="group w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-200 hover:border-red-600 disabled:opacity-40"
            >
              <ChevronRight
                size={20}
                className="text-gray-400 group-hover:text-red-600"
              />
            </button>

          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
}


const TableComparison = () => {
  return (
    <section
      id="TableComparison"
      className="w-full bg-gray-200 py-24 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[30px] md:text-[40px] lg:text-[46px] font-semibold text-[#4f4a4a] leading-tight">
            Bandingkan Fitur Paket{" "}
            <span className="text-red-700 italic font-serifDisplay">
              WMS Pintar
            </span>
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] border-separate border-spacing-y-5">

            {/* Header */}
            <thead>
              <tr>
                <th className="text-left text-red-700 text-[15px] font-bodoni px-8">
                  Fitur Utama
                </th>

                <th className="text-center text-red-700 text-[15px] font-bodoni">
                  Starter
                </th>

                <th className="text-center text-red-700 text-[15px] font-bodoni">
                  Pro
                </th>

                <th className="text-center text-red-700 text-[15px] font-bodoni">
                  Advanced
                </th>

                <th className="text-center text-red-700 text-[15px] font-bodoni">
                  Enterprise
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>

              {/* Row 1 */}
              <tr className="bg-[#fafafa]">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] rounded-l-md">
                  Batas Pengguna (Users)
                </td>

                <td className="text-center text-[14px] text-[#2f2f2f]">
                  Maks 3
                </td>

                <td className="text-center text-[14px] text-[#2f2f2f]">
                  Maks 10
                </td>

                <td className="text-center text-[14px] text-[#2f2f2f]">
                  Maks 25
                </td>

                <td className="text-center text-[14px] text-[#2f2f2f] rounded-r-md">
                  Unlimited
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="bg-transparent">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f]">
                  Scan Barcode & QR Code
                </td>

                <td>
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td>
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td>
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td>
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="bg-[#fafafa] shadow-sm">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] rounded-l-md">
                  Scan RFID Dasar
                </td>

                <td className="text-center text-gray-300 text-2xl">
                  —
                </td>

                <td>
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td>
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td className="rounded-r-md">
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="bg-transparent">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] leading-8">
                  RFID Lanjutan (Mass
                  <br />
                  Scanning)
                </td>

                <td className="text-center text-gray-300 text-2xl">
                  —
                </td>

                <td className="text-center text-gray-300 text-2xl">
                  —
                </td>

                <td>
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td>
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>
              </tr>

              {/* Row 5 */}
              <tr className="bg-[#fafafa] shadow-sm">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] leading-8 rounded-l-md">
                  Dashboard Inventaris
                  <br />
                  Real-Time
                </td>

                <td className="text-center text-[13px] text-[#2f2f2f]">
                  Standar
                </td>

                <td>
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td>
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td className="rounded-r-md">
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>
              </tr>

              {/* Row 6 */}
              <tr className="bg-transparent">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] leading-8">
                  Akurasi Picking (Hingga
                  <br />
                  99%)
                </td>

                <td className="text-center text-gray-300 text-2xl">
                  —
                </td>

                <td>
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td>
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td>
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>
              </tr>

              {/* Row 7 */}
              <tr className="bg-[#fafafa] shadow-sm">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] leading-8">
                  Otomatisasi Restock
                </td>

                <td className="text-center text-[13px] text-[#2f2f2f]">
                  Manual
                </td>

                <td className="text-center text-[13px] text-[#2f2f2f]">
                  Otomatis
                </td>

                <td className="text-center text-[13px] text-[#2f2f2f]">
                  Cerdas
                </td>

                <td className="text-center text-[13px] text-[#2f2f2f]">
                  Kustom
                </td>
              </tr>

              {/* Row 8 */}
              <tr className="bg-transparent">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] leading-8">
                  Dukungan Multi Gudang
                </td>

                <td className="text-center text-gray-300 text-2x1">
                  —
                </td>

                <td className="text-center text-gray-300 text 2x1">
                  —
                </td>

                <td className="rounded-r-md">
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td className="text-center text-[13px] text-[#2f2f2f]">
                  Unlimited
                </td>
              </tr>

              {/* Row 9 */}
              <tr className="bg-[#fafafa] shadow-sm">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] leading-8">
                  Integrasi E-Commerce &
                  <br />
                  POS
                </td>

                <td className="text-center text-gray-300 text-2x1">
                  —
                </td>

                <td className="rounded-r-md">
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td className="rounded-r-md">
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td className="rounded-r-md">
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>
              </tr>

              {/* Row 10 */}
              <tr className="bg-transparent">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] leading-8">
                  Integrasi ERP (SAP/
                  <br />
                  Oracle)
                </td>

                <td className="text-center text-gray-300 font-2x1">
                  —
                </td>

                <td className="text-center text-gray-300 font-2x1">
                  —
                </td>

                <td className="rounded-r-md">
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td className="rounded-r-md">
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>
              </tr>

              <tr className="bg-white">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] leading-8">
                  Custom Roles &
                  <br />
                  Permissions
                </td>

                <td className="text-center text-gray-300 font-2x1">
                  —
                </td>

                <td className="rounded-r-md">
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td className="rounded-r-md">
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>

                <td className="rounded-r-md">
                  <Check
                    size={18}
                    className="mx-auto text-black"
                  />
                </td>
              </tr>

              <tr className="bg-transparent">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] leading-8">
                  Dukungan Pelanggan
                  <br />
                  (Support)
                </td>

                <td className="text-center text-[13px] text-[#2f2f2f]">
                  Email
                </td>

                <td className="text-center text-[13px] text-[#2f2f2f]">
                  Chat/WA
                </td>

                <td className="text-center text-[13px] text-[#2f2f2f]">
                  Prioritas
                </td>

                <td className="text-center text-[13px] text-[#2f2f2f]">
                  Dedicated Manager
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

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
      title: "Sertifikasi ISO 27001",
      desc: "Sistem Manajemen Keamanan Informasi Kami Telah Diaudit Secara Independen Untuk Melindungi Aset Data Anda Dari Berbagai Ancaman Siber Dengan Standar Internasional Tertinggi.",
    },

    {
      icon: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLB0bMTDSwEB6vNwfzZ467jlS_cTe8ES1Mw&s"
          alt="SOC 2"
          className="w-24 h-24 object-contain"
        />
      ),
      title: "Kepatuhan SOC 2 Type II",
      desc: "Bukti Nyata Komitmen Kami Dalam Menjalankan Kontrol Operasional Yang Ketat Dan Konsisten Terhadap Ketersediaan, Kerahasiaan, Serta Integritas Data Pelanggan.",
    },

    {
      icon: (
        <div className="flex items-center gap-2">
          <ShieldCheck
            size={42}
            className="text-green-400"
          />

          <FileCheck2
            size={42}
            className="text-blue-400"
          />
        </div>
      ),


      title: "Regulasi Privasi Data",
      desc: "Sepenuhnya Mematuhi Regulasi Perlindungan Privasi Data Paling Ketat Di Dunia (GDPR & CCPA) Untuk Memastikan Hak Dan Kerahasiaan Informasi Pengguna Selalu Terjaga.",
    },
  ];

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
              className="rounded-[24px] w-full max-w-[520px] h-[340px] object-cover
              rounded-[24px] w-full max-w-[520px] h-[250px] md:h-[340px] object-cover"
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
              <div className="mb-8 flex justify-center">
                {item.icon}
              </div>

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
  );
}
export default function App() {
  return (
    <>
      <BrandSection />
      <TableComparison />
      <About />
    </>
  );
}