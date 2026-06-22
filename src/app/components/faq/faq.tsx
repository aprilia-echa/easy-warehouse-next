'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqData = [
  {
    question: 'Apa Itu WMS Pintar?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },

  {
    question: 'Berapa Lama Proses Implementasi Sistem Ini Di Gudang Kami?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },

  {
    question: 'Apakah Saya Perlu Membeli Perangkat Keras (Hardware) Khusus?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full bg-[#f5f5f5] py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT */}
        <div>
          <h2 className="text-[72px] leading-[0 .95] font-semibold text-[#4b4545]">
            Frequently Asked
            <br />
            <span className="text-red-700">Questions</span>
          </h2>
        </div>

        {/* RIGHT FAQ */}
        <div className="flex flex-col gap-5">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#f7e9e4] rounded-[22px] px-8 py-6 transition-all duration-300"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-5 text-left"
              >
                <h3 className="text-[20px] font-semibold text-[#4b4545] leading-snug">
                  {item.question}
                </h3>

                <div
                  className={`w-8 h-8 rounded-lg bg-red-700 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                >
                  <ChevronDown size={18} className="text-white" />
                </div>
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100 mt-5' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[15px] text-[#6f6f6f] leading-7">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
