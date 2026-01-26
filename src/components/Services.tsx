"use client";
import { motion, Variants } from "framer-motion";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Lubang Kancing",
      desc: "Pembuatan lubang kancing untuk kemeja, celana, atau jas.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M19 21a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v14z" />
      ),
    },
    {
      id: "02",
      title: "Pasang Kancing",
      desc: "Pemasangan berbagai jenis kancing pakaian.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      ),
    },
    {
      id: "03",
      title: "Jahit Wastra",
      desc: "Layanan jahit tepi kain wastra (kain adat) atau selendang.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      ),
    },
    {
      id: "04",
      title: "Overdeck",
      desc: "Jahitan khusus (kumis) untuk bagian kelim kaos.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12l4-4 4 4 4-4 4 4" />
      ),
    },
    {
      id: "05",
      title: "Neci",
      desc: "Penyelesaian tepi kain (neci) yang rapat dan rapi.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      ),
    },
    {
      id: "06",
      title: "Layanan Lainnya",
      desc: "Untuk layanan lainnya harap berkonsultasi langsung.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 15  
      }
    },
  };

  return (
    <section id="services" className="py-24 bg-sunshine-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section (Tetap pakai RevealOnScroll untuk judul) */}
        <RevealOnScroll width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Layanan <span className="text-sunshine">Unggulan</span>
            </h2>
            <div className="w-24 h-1.5 bg-sunshine mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Kami akan melayani anda dengan beberapa layanan yang <strong className="text-sunshine">unggul</strong> dan <strong className="text-sunshine">berkualitas</strong>.
            </p>
          </div>
        </RevealOnScroll>

        {/* --- GRID ANIMASI BARU --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 -m-4"
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants} 
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 flex flex-col items-center text-center h-full cursor-default transition-shadow duration-300"
            >
              
              {/* Icon Container */}
              <div className="relative z-10 w-16 h-16 mb-6 rounded-2xl bg-sunshine/10 text-sunshine flex items-center justify-center group-hover:bg-sunshine group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sunshine transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Garis Bawah Pemanis (Muncul dari kiri ke kanan saat hover) */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-sunshine group-hover:w-full transition-all duration-500 ease-out rounded-b-2xl"></div>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;