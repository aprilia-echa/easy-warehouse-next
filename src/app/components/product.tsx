"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";


const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "Rp130,000/Monthly",
    description: "Gudang Kecil Dengan Pengawasan Barang Standar.",
    buttonText: "Coba Demo",
    featured: false,
    badge: undefined,
    features: [
      "Maksimal 2 Pengguna",
      "Sistem Pencatatan Berbasis QR Code",
      "Dashboard Inventaris Standar",
      "Peringatan Stok Menipis Manual",
      "Dukungan Pelanggan Via Email",
    ],
    footerLink: "Lihat Semua Fitur",
  },
  {
    id: "pro",
    name: "Pro",
    price: "Rp500,000/Monthly",
    description:
      "Bisnis Menengah Yang Butuh Kecepatan, Akurasi Picking, Dan Integrasi.",
    featured: true,
    badge: "Paling Direkomendasikan",
    features: [
      "Maksimal 10 Pengguna",
      "Dukungan Sistem QR & RFID Dasar",
      "Dashboard Real-Time Terpusat",
      "Integrasi Langsung Ke Sistem Kasir",
      "Jaminan Reduksi Kesalahan Picking 99%",
    ],
    buttonText: "Coba Demo",
    footerLink: "Lihat Semua Fitur",
  },
  {
    id: "advance",
    name: "Advance",
    price: "Rp1,500,000/Monthly",
    description:
      "Operasi Volume Tinggi Yang Butuh Visibilitas Dan Prediksi Canggih.",
    featured: false,
    badge: undefined,
    features: [
      "Maksimal 25 Pengguna",
      "Dukungan RFID Tingkat Lanjut",
      "Otomatisasi Pemantauan Restock",
      "Integrasi Langsung Ke Sistem ERP",
      "Integrasi Sistem ERP Lanjutan",
    ],
    buttonText: "Coba Demo",
    footerLink: "Lihat Semua Fitur",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Rp3,000,000/Monthly",
    description: "Kompleks Dengan Multi-Gudang Dan Alur Kerja Kompleks.",
    featured: false,
    badge: undefined,
    features: [
      "Pengguna Tidak Terbatas",
      "Manajemen Multi Gudang",
      "Pengembangan Fitur Kustom",
      "Server Khusus Dedicated",
      "Pelatihan Admin Dedicated",
    ],
    buttonText: "Coba Demo",
    footerLink: "Lihat Semua Fitur",
  },
];

type Plan = {
  id: string;
  name: string;
  price: string;
  description: string;
  buttonText: string;
  featured?: boolean;
  badge?: string;
  footerLink: string;
  features: string[];
};

function PricingCard({ plan }: { plan: Plan }) {

  return (
    <div
      className={`
        relative flex flex-col rounded-2xl p-7 transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl group cursor-default
        ${plan.featured
          ? "bg-rose-50 border-2 border-red-200 shadow-xl shadow-red-100/60"
          : "bg-white border border-gray-100 shadow-md shadow-gray-100"
        }
      `}
    >

      {/* Icon + Plan Name */}
      <div className="flex items-center gap-2">
        <h3 className="text-3xl tracking-tight text-gray-800">
          {plan.name}
        </h3>
        {plan.badge && (
          <span className="bg-red-300 text-red-600 text-[10px] font-semibold px-3 py-1 rounded-full">
            {plan.badge}
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline md-10">
          <span className="text-2xl tracking-tight leading-none text-black">
            {plan.price}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed mb-8 min-h-[3rem]">
        {plan.description}
      </p>

      {/* CTA Button */}
      <button
        className={`
    w-full py-3 rounded-md text-sm tracking-wide
    transition-all duration-300 ease-out

    ${plan.featured
            ? "bg-red-600 text-white hover:bg-gradient-to-r hover:from-red-800 hover:to-black"
            : "bg-white text-red-600 border border-red-600 hover:bg-gradient-to-r hover:from-red-700 hover:to-black hover:text-white"
          }
  `}
      >
        {plan.buttonText}
      </button>

      {/* Divider */}
      <div
        className={`h-px mb-6 ${plan.featured ? "bg-red-100" : "bg-gray-100"
          }`}
      />

      {/* Features */}
      <ul className="space-y-1 flex-1 mb-7">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">

            <CircleCheck
              size={18}
              className="text-red-600 mt-0.5 flex-shrink-0"
            />

            <span className="text-xs text-gray-600">
              {feature}
            </span>

          </li>
        ))}
      </ul>

      {/* Footer Link */}
      <div className="mt-4 text-center">
        <a
          href="#TableComparison"
          className={`
            text-xs font-medium underline underline-offset-2 text-red-500 hover:text-red-700
          `}
        >
          {plan.footerLink} →
        </a>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section
      id="produk"
      className="relative bg-gray-200 py-24 px-4 overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, #fee2e2 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, #fef3f2 0%, transparent 50%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">

          {/* Main Heading */}
          <h2 className="text-4xl font-semibold text-gray-700 mb-4">
            Ubah Gudang Konvensional Menjadi
            <br />
            <span className="font-serifDisplay italic text-red-600 text-[40px]"> Pusat Operasional Pintar</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-[15px] mb-15">
            Kelola Inventaris Secara Real-Time Dengan Teknologi QR & RFIQ Dalam Satu Platform Terintegrasi. Kurangi Kesalahan Picking Hingga 99% Dan Pastikan Stok Selalu Aman Tanpa Ribet.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
