'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const brands = [
  { src: '/logos/Samsung.png', size: 'h-6 md:h-8' },
  { src: '/logos/Nvidia.png', size: 'h-6 md:h-8' },
  { src: '/logos/Sony.png', size: 'h-6 md:h-8' },
  { src: '/logos/CocaCola.png', size: 'h-6 md:h-8' },
  { src: '/logos/Nestle.png', size: 'h-6 md:h-8' },
  { src: '/logos/Amazon.png', size: 'h-6 md:h-8' },
  { src: '/logos/Prada.png', size: 'h-8 md:h-12' },
  { src: "/logos/Victoria'sSecret.png", size: 'h-8 md:h-12' }
]

const testimonials = [
  {
    brand: 'Victoria Secret',
    category: 'Specialty Retail (Ritel Khusus)',
    text: `"Akurasi inventaris naik menjadi 99% sejak menggunakan WMS Pintar. Tidak ada lagi drama barang hilang atau salah kirim saat audit."`
  },

  {
    brand: 'Nestle',
    category: 'F&B / FMCG Manufacturing',
    text: `"Fitur pelacakan Batch dan visibilitas FEFO dari WMS Pintar menyelamatkan kami dari kerugian miliaran rupiah akibat produk expired. Standar keamanan pangan kami kini 100% terjaga."`
  },

  {
    brand: 'Amazon',
    category: 'E-commerce & Logistics',
    text: `"WMS Pintar adalah otak di balik jalur delivery kami. Sistem ini mampu mengoptimalkan ribuan pesanan per jam dengan akurasi mencapai 99.8%."`
  },

  {
    brand: 'Sony',
    category: 'Technology',
    text: `"Monitoring stok menjadi jauh lebih cepat dan real-time. Tim operasional kami kini bekerja lebih efisien."`
  },

  {
    brand: 'Samsung',
    category: 'Electronics',
    text: `"Integrasi dashboard dan tracking RFID sangat membantu proses distribusi skala besar."`
  }
]

export default function BrandSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <section id="about" className="w-full bg-gray-200 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-[48px] md:text-[48px] font-semibold text-[#4b4545] leading-tight">
            Mengapa Brand Global Memilih
            <br />
            <span className="text-red-700 italic font-lora">
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
              // eslint-disable-next-line @next/next/no-img-element
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
              transform: `translateX(-${currentIndex * 100}%)`
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
  )
}
