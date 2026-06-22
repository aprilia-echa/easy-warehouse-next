import VerticalTimeline from "./verticaltimeline"

export default function Feature() {
  return (
    <section>
      <VerticalTimeline />
        <Content />
    </section>
  )
}

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

