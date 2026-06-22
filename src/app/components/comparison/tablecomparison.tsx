import {
  Check
  } from 'lucide-react'

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
            Bandingkan Fitur Paket{' '}
            <span className="text-red-700 font-lora">
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
                <th className="text-left text-red-700 text-[15px] font-lora px-8">
                  Fitur Utama
                </th>

                <th className="text-center text-red-700 text-[15px] font-lora">
                  Starter
                </th>

                <th className="text-center text-red-700 text-[15px] font-lora">
                  Pro
                </th>

                <th className="text-center text-red-700 text-[15px] font-lora">
                  Advanced
                </th>

                <th className="text-center text-red-700 text-[15px] font-lora">
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
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td>
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td>
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td>
                  <Check size={18} className="mx-auto text-black" />
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="bg-[#fafafa] shadow-sm">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] rounded-l-md">
                  Scan RFID Dasar
                </td>

                <td className="text-center text-gray-300 text-2xl">—</td>

                <td>
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td>
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td className="rounded-r-md">
                  <Check size={18} className="mx-auto text-black" />
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="bg-transparent">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] leading-8">
                  RFID Lanjutan (Mass
                  <br />
                  Scanning)
                </td>

                <td className="text-center text-gray-300 text-2xl">—</td>

                <td className="text-center text-gray-300 text-2xl">—</td>

                <td>
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td>
                  <Check size={18} className="mx-auto text-black" />
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
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td>
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td className="rounded-r-md">
                  <Check size={18} className="mx-auto text-black" />
                </td>
              </tr>

              {/* Row 6 */}
              <tr className="bg-transparent">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] leading-8">
                  Akurasi Picking (Hingga
                  <br />
                  99%)
                </td>

                <td className="text-center text-gray-300 text-2xl">—</td>

                <td>
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td>
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td>
                  <Check size={18} className="mx-auto text-black" />
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

                <td className="text-center text-gray-300 text-2x1">—</td>

                <td className="text-center text-gray-300 text 2x1">—</td>

                <td className="rounded-r-md">
                  <Check size={18} className="mx-auto text-black" />
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

                <td className="text-center text-gray-300 text-2x1">—</td>

                <td className="rounded-r-md">
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td className="rounded-r-md">
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td className="rounded-r-md">
                  <Check size={18} className="mx-auto text-black" />
                </td>
              </tr>

              {/* Row 10 */}
              <tr className="bg-transparent">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] leading-8">
                  Integrasi ERP (SAP/
                  <br />
                  Oracle)
                </td>

                <td className="text-center text-gray-300 font-2x1">—</td>

                <td className="text-center text-gray-300 font-2x1">—</td>

                <td className="rounded-r-md">
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td className="rounded-r-md">
                  <Check size={18} className="mx-auto text-black" />
                </td>
              </tr>

              <tr className="bg-white">
                <td className="px-8 py-8 text-[14px] font-semibold text-[#2f2f2f] leading-8">
                  Custom Roles &
                  <br />
                  Permissions
                </td>

                <td className="text-center text-gray-300 font-2x1">—</td>

                <td className="rounded-r-md">
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td className="rounded-r-md">
                  <Check size={18} className="mx-auto text-black" />
                </td>

                <td className="rounded-r-md">
                  <Check size={18} className="mx-auto text-black" />
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
  )
}

export default TableComparison