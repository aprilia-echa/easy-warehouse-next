import { AlertTriangle, Zap } from 'lucide-react'
import Image from 'next/image'

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      {/* Main Window */}
      <div className="relative bg-[#f3efef] rounded-[28px] p-6 shadow-xl border border-gray-200">
        {/* Top dots */}
        <div className="flex gap-2 mb-5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Main Content */}
        <div className="relative border border-dashed border-gray-300 rounded-2xl p-4 bg-[#f6f3f3]">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="https://ironstor.co.uk/cdn/shop/articles/warehouse-safety_7319b463-9ad3-471a-8cde-7c67c2789d9c.jpg?v=1774965485&width=1100"
              alt="warehouse"
              width={250}
              height={300}
              className="rounded-xl object-cover"
            />
          </div>

          {/* Alert Card */}
          <div className="absolute top-[-10px] right-[-30px] bg-white rounded-md shadow-lg px-4 py-3 flex items-start gap-3 border border-gray-100">
            <div className="bg-black text-white p-2 rounded-xl">
              <AlertTriangle size={16} />
            </div>

            <div>
              <h4 className="text-[13px] font-semibold text-gray-800">Alert</h4>
              <p className="text-[12px] text-gray-500">Stok Anda Menipis</p>
            </div>
          </div>

          {/* Integration Card */}
          <div className="absolute top-[40px] left-[-20px] bg-white rounded-md shadow-lg px-4 py-2 flex items-start gap-3 border border-gray-100">
            <div className="bg-black text-white p-2 rounded-xl">
              <Zap size={16} />
            </div>

            <div>
              <h4 className="text-[13px] font-semibold text-gray-800">
                Easy Integration
              </h4>
            </div>
          </div>

          {/* Trusted By */}
          <div className="absolute right-[-6px] bottom-[95px] bg-white rounded-md shadow-lg px-4 py-3 border border-gray-100">
            <p className="text-[10px] text-gray-400 mb-2">Trusted by</p>

            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/Amazon.png" alt="Amazon" className="h-2" />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/Nestle.png" alt="Nestle" className="h-4" />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/Nvidia.png" alt="Nvidia" className="h-4" />
            </div>
          </div>

          {/* RFID */}
          <div className="absolute left-[-20px] bottom-[-25px] bg-white rounded-md shadow-xl border border-gray-100 p-4 w-[190px]">
            <h4 className="text-[12px] font-semibold text-gray-700 mb-3">
              Scanner RFID
            </h4>

            <div className="space-y-2">
              {['A1', 'B1', 'C1'].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-[11px]"
                >
                  <span className="text-gray-500">Item Box-{item}-Rak C3</span>

                  <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-md">
                    Sukses
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
