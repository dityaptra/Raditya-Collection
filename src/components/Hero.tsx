"use client"; // <--- WAJIB DITAMBAHKAN: Agar onClick bisa berjalan

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  // --- FUNGSI SCROLL MANUAL (Sama seperti Navbar) ---
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault(); // Mencegah browser cuma ganti URL doang
    
    // Ambil elemen tujuan berdasarkan ID
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    // Paksa scroll halus ke elemen tersebut
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 1. BACKGROUND IMAGE & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Latar Belakang Workshop Jahit"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* 2. KONTEN TENGAH */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-18">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
          Jahit Impianmu Menjadi Kenyataan
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Jasa penjahit profesional Raditya Collection. Kami menghadirkan
          potongan presisi, jahitan rapi, dan desain elegan khusus untuk Anda.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          
          {/* TOMBOL 1: Hubungi Kami */}
          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")} // <--- Tambahkan ini
            className="px-8 py-3 rounded-full bg-sunshine text-white font-bold text-lg hover:bg-white hover:text-sunshine transition-all duration-300 shadow-lg hover:shadow-sunshine/50 cursor-pointer"
          >
            Hubungi Kami
          </Link>

          {/* TOMBOL 2: Lihat Layanan */}
          <Link
            href="#services"
            onClick={(e) => handleScroll(e, "#services")} // <--- Tambahkan ini
            className="px-8 py-3 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer"
          >
            Lihat Layanan
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;