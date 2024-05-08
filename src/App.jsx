import { useEffect, useState } from "react";

const menu = [
  {
    name: "Beranda",
    url: "#",
  },
  {
    name: "Tentang",
    url: "#tentang",
  },
  {
    name: "Layanan",
    url: "#layanan",
  },
  {
    name: "Kontak",
    url: "#kontak",
  },
];

const layanan = [
  {
    name: "Konsultan Konstruksi",
    description:
      "Menyediakan jasa konsultasi konstruksi untuk berbagai jenis bangunan.",
    image: "/service-1.png",
  },
  {
    name: "Konsultan Pertambangan",
    description:
      "Menyediakan jasa konsultasi pertambangan untuk berbagai jenis tambang.",
    image: "/service-2.png",
  },
  {
    name: "Konsultan Geoteknik",
    description:
      "Menyediakan jasa konsultasi geoteknik untuk berbagai jenis tanah.",
    image: "/service-3.png",
  },
  {
    name: "Konsultan Struktur",
    description:
      "Menyediakan jasa konsultasi struktur untuk berbagai jenis bangunan.",
    image: "/service-4.png",
  },
  {
    name: "Konsultan Sipil",
    description:
      "Menyediakan jasa konsultasi sipil untuk berbagai jenis bangunan.",
    image: "/service-5.png",
  },
  {
    name: "Konsultan Lingkungan",
    description:
      "Menyediakan jasa konsultasi lingkungan untuk berbagai jenis lingkungan.",
    image: "/service-6.png",
  },
  {
    name: "Konsultan Hidrologi",
    description:
      "Menyediakan jasa konsultasi hidrologi untuk berbagai jenis air.",
    image: "/service-7.png",
  },
];

function App() {
  const year = new Date().getFullYear();
  const [onScroll, setOnScroll] = useState(false);
  const TOP_OFFSET = 50;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`top-0 fixed w-full z-50 bg-white ${
          onScroll ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-16">
          <a href="/">
            <img
              src="/logo.png"
              alt="Sinergi Karya Solutif"
              className="h-20 w-auto"
            />
          </a>
          <ul className="flex justify-center space-x-8">
            {menu.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  className="font-sans font-semibold text-gray-900 hover:text-gray-600"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main>
        <section className="flex flex-col items-center justify-center min-h-screen">
          <div className="container mx-auto text-center">
            <p className="text-4xl font-bold text-gray-800">
              Sinergi Karya Solutif
            </p>
            <p className="text-lg text-gray-500 mt-4 font-normal">
              Partner Terbaik dalam Konstruksi dan Pertambangan.
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center bg-gray-100 py-8">
          <div className="container mx-auto text-center">
            <p className="text-2xl font-bold text-gray-800 capitalize">
              Telah dipercaya oleh
            </p>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <img src="/client-1.png" alt="Client 1" />
              <img src="/client-2.png" alt="Client 2" />
              <img src="/client-3.png" alt="Client 3" />
              <img src="/client-4.png" alt="Client 4" />
            </div>
          </div>
        </section>
        <section
          id="tentang"
          className="flex flex-col items-center justify-center min-h-screen"
        >
          <div className="container mx-auto text-center mt-28 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-bold text-gray-800 uppercase">
                  Tentang Kami
                </p>
                <p className="text-lg text-gray-500 mt-4 font-light text-justify">
                  Alhamdulillah, Atas Rahmat Allah Subhanawata’ala CV. Sinergi
                  Karya Solutif (CV. SKS) perusahaan yang didirikan di
                  Purwokerto pada tanggal 20 Mei 2019 telah memulai usaha di
                  bidang konsultan konstruksi dan pertambangan.
                </p>
                <p className="text-lg text-gray-500 mt-4 font-light text-justify">
                  Sejak kami berdiri, hingga saat ini kami sudah berkerjasama
                  dengan lebih dari 20 pelanggan di bidang konstruksi dan
                  pertambangan. Hal ini menjadi bukti bahwa CV. SKS memiliki
                  kompetensi yang tinggi dalam memberikan pelayanan terbaik bagi
                  pelanggan kami.
                </p>
                <p className="text-lg text-gray-500 mt-4 font-light text-justify">
                  Dengan memiliki pengalaman yang cukup dan dibekali dengan
                  sumber daya manusia yang berpengalaman di bidangnya, kami
                  berharap CV. SKS dapat melakukan lompatan tinggi dalam
                  menapaki bisnis konstruksi dan pertambangan ini sehingga bisa
                  memberikan layanan yang terbaik bagi para pelanggan kami.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/about.png"
                  alt="About"
                  className="w-9/12 hidden md:block"
                />
              </div>
            </div>
          </div>
          {/* Visi */}
          <div className="container mx-auto text-center mt-16">
            <p className="text-2xl font-bold text-gray-800 uppercase">Visi</p>
            <blockquote className="relative text-center max-w-lg mx-auto mt-4 font-light">
              <div className="relative z-10">
                <p className="text-xl text-gray-800">
                  <em className="relative">
                    <svg
                      className="absolute -top-8 -start-8 size-16 text-gray-100 sm:h-24 sm:w-24 dark:text-neutral-700"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="relative z-10 dark:text-white hover:bg-yellow-400">
                      Menjadi Mitra Utama di Bidang Konstruksi dan Pertambangan
                      dalam bidang Perencanaan dan Pengawasan Mutu.
                    </span>
                  </em>
                </p>
              </div>
            </blockquote>
          </div>
          {/* Misi */}
          <div className="container mx-auto text-center mt-8">
            <p className="text-2xl font-bold text-gray-800 uppercase">Misi</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white shadow-md p-4">
                <img
                  src="/mission-1.png"
                  alt="Mission 1"
                  className="w-16 h-16"
                />
                <p className="text-lg font-bold text-gray-800">
                  Menjadikan kegiatan kami sebagai ibadah dalam hidup kami.
                </p>
              </div>
              <div className="bg-white shadow-md p-4">
                <img
                  src="/mission-2.png"
                  alt="Mission 2"
                  className="w-16 h-16"
                />
                <p className="text-lg font-bold text-gray-800">
                  Memberikan kemampuan terbaik dalam melaksanakan setiap
                  pekerjaan.
                </p>
              </div>
              <div className="bg-white shadow-md p-4">
                <img
                  src="/mission-3.png"
                  alt="Mission 3"
                  className="w-16 h-16"
                />
                <p className="text-lg font-bold text-gray-800">
                  Menjadikan mutu dan kualitas sebagai hal yang utama di setiap
                  pekerjaan.
                </p>
              </div>
              <div className="bg-white shadow-md p-4">
                <img
                  src="/mission-4.png"
                  alt="Mission 4"
                  className="w-16 h-16"
                />
                <p className="text-lg font-bold text-gray-800">
                  Menyediakan layanan konsultan konstruksi dan pertambangan yang
                  terjangkau bagi semua kalangan.
                </p>
              </div>
              <div className="bg-white shadow-md p-4">
                <img
                  src="/mission-5.png"
                  alt="Mission 5"
                  className="w-16 h-16"
                />
                <p className="text-lg font-bold text-gray-800">
                  Kami terbuka dan selalu memperluas jaringan kerjasama untuk
                  memberikan solusi bagi pelanggan kami.
                </p>
              </div>
              <div className="bg-white shadow-md p-4">
                <img
                  src="/mission-6.png"
                  alt="Mission 6"
                  className="w-16 h-16"
                />
                <p className="text-lg font-bold text-gray-800">
                  Selalu bertumbuh dan berinovasi untuk mencapai kepuasan bagi
                  pelanggan kami.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="layanan"
          className="flex flex-col items-center justify-center min-h-screen"
        >
          <div className="container mx-auto text-center">
            <p className="text-2xl font-bold text-gray-800 uppercase">
              Layanan Kami
            </p>
            <p className="text-lg text-gray-500 mt-4 font-light capitalize">
              Daftar layanan yang kami tawarkan
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {layanan.map((item) => (
                <div className="bg-white shadow-md p-4 text-left transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
                  <img src={item.image} alt={item.name} />
                  <p className="text-lg font-bold text-gray-800 mt-4 capitalize">
                    {item.name}
                  </p>
                  <p className="text-gray-500 mt-2">{item.description}</p>
                </div>
              ))}
              {/* Explore Layanan Lainnya */}
              <div className="bg-white shadow-md p-4 text-center transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
                <p className="text-4xl text-gray-800">...</p>
                <p className="text-lg font-bold text-gray-800 mt-4">
                  Explore Layanan Lainnya
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="kontak"
          className="flex flex-col items-center justify-center min-h-screen"
        >
          <p className="text-2xl font-bold text-gray-800 uppercase">
            Kontak Kami
          </p>
          <div className="container mx-auto text-center grid grid-cols-1 md:grid-cols-2 gap-4 shadow-md p-8 mt-8 border border-gray-300 rounded-lg">
            {/* Form Kontak */}
            <div className="bg-white">
              <form className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Nama"
                  className="p-4 w-full border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-4 w-full border border-gray-300 rounded-md"
                />
                <textarea
                  placeholder="Pesan"
                  className="p-4 w-full border border-gray-300 rounded-md"
                />
                <button
                  type="submit"
                  className="text-white p-4 rounded-md bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out delay-150 hover:shadow-md hover:scale-110 hover:-translate-y-1"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
            {/* Google Maps Embed */}
            <div>
              <iframe
                className="w-full h-96 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.7673929332395!2d109.2486852750964!3d-7.379945472640592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655f54d50da90f%3A0x88954b388855e6b6!2sCV%20Sinergi%20Karya%20Solutif!5e0!3m2!1sid!2sid!4v1714826938568!5m2!1sid!2sid"
                width="600"
                height="450"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {year} Sinergi Karya Solutif. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
