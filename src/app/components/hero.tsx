import {
  ArrowRight,
  AlertTriangle,
  Zap,
} from "lucide-react";

function DashboardMockup() {
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

        {/* Worker Image */}
          <div className="flex justify-center">
            <img
              src="https://ironstor.co.uk/cdn/shop/articles/warehouse-safety_7319b463-9ad3-471a-8cde-7c67c2789d9c.jpg?v=1774965485&width=1100"
              alt="warehouse"
              className="w-[250px] h-[300px] object-cover rounded-xl"
            />
          </div>

          {/* Alert Card */}
          <div className="absolute top-[-10px] right-[-30px] bg-white rounded-md shadow-lg px-4 py-3 flex items-start gap-3 border border-gray-100">

            <div className="bg-black text-white p-2 rounded-xl">
              <AlertTriangle size={16} />
            </div>

            <div>
              <h4 className="text-[13px] font-semibold text-gray-800">
                Alert
              </h4>

              <p className="text-[12px] text-gray-500">
                Stok Anda Menipis
              </p>
            </div>
          </div>

          {/* Accuracy Card */}
          <div className="absolute top-[40px] left-[-20px] bg-white rounded-md shadow-lg px-4 py-2 flex items-start gap-3 border border-gray-100">

            <div className="bg-black text-white p-2 rounded-xl">
              <Zap size={16} />
            </div>

            <div>
              <h4 className="py-2text-[13px] font-semibold text-gray-800">
                Easy Integration
              </h4>

            </div>
          </div>

          {/* Trusted By */}
          <div className="absolute right-[-6px] bottom-[95px] bg-white rounded-md shadow-lg px-4 py-3 border border-gray-100">

            <p className="text-[10px] text-gray-400 mb-2">
              Trusted by
            </p>

            <div className="flex items-center gap-3">

              <img
                src="./logos/amazon.png"
                alt="amazon"
                className="h-2 object-contain"
              />

              <img
                src="./logos/Nestle.png"
                alt="Nestle"
                className="h-4 object-contain"
              />

              <img
                src="./logos/Nvidia.png"
                alt="NVIDIA"
                className="h-4 object-contain"
              />

            </div>
          </div>

          {/* RFID Scanner */}
          <div className="absolute left-[-20px] bottom-[-25px] bg-white rounded-md shadow-xl border border-gray-100 p-4 w-[190px]">

            <h4 className="text-[12px] font-semibold text-gray-700 mb-3">
              Scanner RFID
            </h4>

            <div className="space-y-2">

              <div className="flex items-center justify-between text-[11px]">
                <span className="text-gray-500">
                  Item Box-A1-Rak C3
                </span>

                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-md">
                  Sukses
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px]">
                <span className="text-gray-500">
                  Item Box-B1-Rak C3
                </span>

                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-md">
                  Sukses
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px]">
                <span className="text-gray-500">
                  Item Box-C1-Rak C3
                </span>

                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-md">
                  Sukses
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

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

            <h1 className="text-[30px] sm:text-[38px] lg:text-[52px] font-semibold text-gray-700 leading-[1.1] tracking-tight mb-4 mt-10">

              Optimalkan Gudang
              <br />

              <span className="text-gray-700">
                Anda Dengan
              </span>

              <br />

              <span className="font-serifDisplay text-red-600 italic text-[60px]">
                WMS Pintar
              </span>

            </h1>

            <p className="text-[15.5px] text-gray-500 leading-relaxed mb-8 max-w-[440px]">

              Pengelolaan inventaris Real-Time dengan QR & RFID Tanpa Ribet,
              Dashboard Real-Time, Integrasi Langsung Ke Sistem Anda.
              Semua Dalam Satu Platform. Hindari Kehabisan Barang,
              Kurangi Kesalahan Picking Hingga 99%.

            </p>

            {/* BUTTON */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">

              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm px-7 py-4 rounded-2xl shadow-lg hover:shadow-red-200 hover:shadow-xl transition-all duration-200"
              >
                Jadwalkan Demo

                <ArrowRight size={16} />
              </a>

            </div>

            <div className="flex items-center gap-6 mt-10">

              <img
                src="/badges/badge1.png"
                alt="award"
                className="h-11 object-contain"
              />

              <img
                src="/badges/badge2.png"
                alt="award"
                className="h-11 object-contain"
              />

              <img
                src="/badges/badge3.png"
                alt="award"
                className="h-11 object-contain"
              />

              <img
                src="/badges/badge1.png"
                alt="award"
                className="h-11 object-contain"
              />

              <img
                src="/badges/badge2.png"
                alt="award"
                className="h-11 object-contain"
              />

              <img
                src="/badges/badge3.png"
                alt="award"
                className="h-11 object-contain"
              />


            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <DashboardMockup />
          </div>

        </div>
      </div>
    </section>
  );
}