/* eslint-disable @next/next/no-img-element */
import { SquarePlay, CircleFadingPlus, Music2 } from 'lucide-react'

export default function footer() {
  return (
    <footer id="footer" className="w-full bg-[#f5f5f5] pt-28 overflow-hidden">
      {/* CTA BOX */}
      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <div className="bg-linear-to-r from-red-600 to-red-900 rounded-[18px] px-6 md:px-[30px] py-8 md:py-[35px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          {/* TEXT */}
          <h2 className="text-white uppercase font-bold text-[20px] md:text-[25px] max-w-[760px] text-center md:text-left">
            TARGETKAN PERTUMBUHAN MAKSIMAL?
            <br />
            RAIH DENGAN FULFILLMENT CERDAS.
          </h2>

          {/* BUTTON */}
          <button className="bg-white text-red-700 text-[17px] font-semibold px-10 py-2 rounded-[10px] shadow-md hover:scale-105 transition-all duration-300">
            Hubungi Kami
          </button>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-[#ececec] mt-[-45px] pt-24 md:pt-32 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8">
            {/* LEFT SIDE */}
            <div>
              {/* LOGO */}
              <div className="flex items-start gap-4">
                <img
                  src="/logos/logo.png"
                  alt="logo"
                  className="w-[45px] object-contain"
                />

                <div className="mt-1">
                  <h2 className="text-[20px] font-bold leading-none text-[#1f1f1f]">
                    EASY
                  </h2>

                  <p className="text-[20px] leading-none text-[#a50000]">
                    WAREHOUSE
                  </p>
                </div>
              </div>

              {/* DESC */}
              <p className="mt-2 text-[15px] leading-normal text-[#555] max-w-[390px]">
                Solusi pergudangan cerdas yang
                <br />
                memberdayakan bisnis di era digital melalui
                <br />
                visibilitas data dan otomatisasi sensorik.
              </p>

              {/* SOCIAL */}
              <div className="flex items-center gap-4 md:gap-5 mt-10">
                <a href="https://www.tiktok.com/@rapiertechnology?_r=1&_t=ZS-96rbOjRSmEz">
                  <div className="w-[44px] h-[44px] rounded-[10px] bg-[#f7f7f7] flex items-center justify-center shadow-sm">
                    <Music2 size={20} className="text-[#555]" />
                  </div>
                </a>

                <a href="https://www.youtube.com/@RapierTechnology">
                  <div className="w-[44px] h-[44px] rounded-[10px] bg-[#f7f7f7] flex items-center justify-center shadow-sm">
                    <SquarePlay size={20} className="text-[#555]" />
                  </div>
                </a>

                <a href="https://www.instagram.com/rapiertechnology?igsh=NzUxb2YyamZlbWdr">
                  <div className="w-[44px] h-[44px] rounded-[10px] bg-[#f7f7f7] flex items-center justify-center shadow-sm">
                    <CircleFadingPlus size={20} className="text-[#555]" />
                  </div>
                </a>
              </div>
            </div>

            {/* COLUMN 1 */}
            <div className="pt-4">
              <h3 className="text-[18px] font-bold text-[#222] mb-6">PRODUK</h3>

              <ul className="text-[15px] text-[#7a7a7a]">
                <li>
                  <a
                    href="#fitur"
                    className="hover:text-red-700 cursor-pointer transition-all"
                  >
                    Fitur Utama
                  </a>
                </li>
              </ul>
            </div>

            {/* COLUMN 2 */}
            <div className="pt-4">
              <h3 className="text-[18px] font-bold text-[#222] mb-6">
                PERUSAHAAN
              </h3>

              <ul className="text-[15px] text-[#7a7a7a]">
                <li>
                  <a
                    href="#about"
                    className="hover:text-red-700 cursor-pointer transition-all"
                  >
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div className="pt-4">
              <h3 className="text-[18px] font-bold text-[#222] mb-6">LEGAL</h3>

              <ul className="text-[15px] text-[#7a7a7a]">
                <li>
                  <a
                    href="#faq"
                    className="hover:text-red-700 cursor-pointer transition-all"
                  >
                    FAQ
                  </a>
                </li>

                <li className="py-6">
                  <a
                    href="#footer"
                    className="hover:text-red-700 cursor-pointer transition-all"
                  >
                    Kontak Kami
                  </a>
                </li>
              </ul>
            </div>
          </div>

           {/* CONTACT */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 mt-12 lg:mt-24 order-last lg:order-none">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <p className="text-[15px] text-[#666] whitespace-nowrap">
                  Phone number
                </p>

                <a href="https://web.whatsapp.com">
                  <p className="text-[15px] font-medium text-[#222] whitespace-nowrap">
                    1-800-201-1019
                  </p>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <p className="text-[15px] text-[#666] whitespace-nowrap">
                  Email
                </p>

                <a href="mailto:RapierSupport@gmail.com">
                  <p className="text-[15px] font-medium text-[#222] whitespace-nowrap">
                    RapierSupport@gmail.com
                  </p>
                </a>
              </div>
            </div>

          {/* COPYRIGHT */}
          <div className="mt-14 pt-8 border-t border-[#dddddd]">
            <p className="text-[11px] text-[#a1a1a1]">
              2026 EasyWarehouse. Digitalizing your inventory Management.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
