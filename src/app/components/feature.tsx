import { ScanLine, Package, MapPin, Truck } from 'lucide-react'

const timelineData = [
  {
    title: 'Identifikasi Barang Masuk',
    desc: 'Saat barang baru tiba, sistem portal RFID akan langsung mengenalinya secara otomatis tanpa perlu pemindaian manual.',
    icon: <ScanLine size={18} />,
    tags: ['Pembaruan Real-Time'],
    position: 'left'
  },

  {
    title: 'Optimasi Penyimpanan',
    desc: 'Maksimalkan kapasitas gudang Anda dengan sistem penataan lokasi otomatis yang mengatur peletakan barang secara optimal.',
    icon: <Package size={18} />,
    tags: ['Rekomendasi Lokasi Otomatis', 'Mengurangi Picking'],
    position: 'right'
  },

  {
    title: 'Pemenuhan Pesanan',
    desc: 'Percepat proses pengambilan barang dengan navigasi lokasi yang akurat di layar, memastikan pengiriman tepat waktu setiap saat.',
    icon: <MapPin size={18} />,
    tags: ['Picking Cepat & Akurat', 'Navigasi Lokasi Real-Time'],
    position: 'left'
  },

  {
    title: 'Verifikasi Pengiriman',
    desc: 'Pastikan setiap pesanan sudah benar dengan proses verifikasi akhir yang otomatis, meminimalkan kesalahan kirim sebelum barang meninggalkan gudang.',
    icon: <Truck size={18} />,
    tags: ['Cek Otomatis', 'Bebas Salah Kirim'],
    position: 'right'
  }
]

const Content = () => {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-700 leading-tight">
          Satu Platform Untuk Seluruh
          <br />
          Operasional Gudang Anda
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-[15px] font-light max-w-xl mx-auto mt-5 leading-7">
          Pelajari Cara Mengelola Inbound, Outbound, Dan Inventaris Secara
          Efisien Dalam Tampilan Yang Intuitif.
        </p>

        {/* Video */}
        <div className="relative mt-14 flex justify-center">
          <div className="relative bg-white rounded-[28px] shadow-2xl overflow-hidden border border-gray-200 max-w-5xl w-full">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/jb5g4UFHmfQ"
              title="Warehouse"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

const VerticalTimeline = () => {
  return (
    <>
      <section className="relative py-24 bg-[#f8f8f8] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute top-0 left-0 w-full h-full flex flex-wrap gap-6 justify-center items-center">
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="w-28 h-32 bg-white/80"
                style={{
                  clipPath:
                    'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
                  boxShadow: `
            0 0 20px rgba(255,255,255,0.9),
            0 0 40px rgba(255,255,255,0.6),
            inset 0 0 12px rgba(255,255,255,0.8)
          `,
                  backdropFilter: 'blur(2px)'
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div id="fitur" className="text-center mb-24">
            <h2 className="text-5xl font-semibold text-gray-700 leading-tight">
              Modul
              <span className="font-serifDisplay italic text-red-600 text-[60px]">
                {' '}
                Berperforma
              </span>
              <br />
              <span className="font-serifDisplay italic text-red-600 text-[60px]">
                Tinggi
              </span>
              <span className="text-5xl font-semibold text-gray-700">
                {' '}
                Dirancang Untuk
              </span>
              <br />
              <span className="text-5xl font-semibold text-gray-700">
                Skalabilitas
              </span>
            </h2>

            <p className="text-gray-500 text-[15px] max-w-xl mx-auto mt-6 leading-7">
              Kelola Seluruh Siklus Inventaris Anda, Dari Penerimaan Hingga
              Pemenuhan Pesanan, Dalam Satu Platform Terpadu.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full bg-red-600 rounded-full hidden md:block"></div>

            <div className="space-y-20">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${item.position === 'left' ? 'md:justify-start' : 'md:justify-end'} justify-center`}
                >
                  {/* Icon */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white shadow-lg">
                    {item.icon}
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[42%] bg-white rounded-3xl shadow-lg border border-gray-100 p-7 hover:-translate-y-2 transition-all duration-300 ${item.position === 'left' ? 'md:mr-auto' : 'md:ml-auto'}`}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 leading-relaxed text-[15px] mb-5">
                      {item.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default VerticalTimeline
