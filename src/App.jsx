const menu = [
  {
    name: "Beranda",
    url: "/",
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

function App() {
  const year = new Date().getFullYear();
  return (
    <>
      <nav className="top-0 fixed w-full z-50 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4 md:p-2">
          <a href="/">
            <img
              src="/logo.png"
              alt="Sinergi Karya Solutif"
              className="h-16 w-16"
            />
          </a>
          <ul className="flex justify-center space-x-4">
            {menu.map((item) => (
              <li>
                <a
                  href={item.url}
                  className="hover:text-gray-500 font-sans font-semibold"
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
            <p className="text-lg text-gray-500 mt-4 font-light">
              Memberikan solusi terbaik untuk bisnis Anda
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center bg-gray-100 py-8">
          <div className="container mx-auto text-center">
            <p className="text-2xl font-bold text-gray-800">
              Telah dipercaya oleh
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
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
          <div className="container mx-auto text-center">
            <p className="text-2xl font-bold text-gray-800">Tentang Kami</p>
            <p className="text-lg text-gray-500 mt-4 font-light">
              Alhamdulillah, Atas Rahmat Allah Subhanawata’ala CV. Sinergi Karya
              Solutif (CV. SKS) perusahaan yang didirikan di Purwokerto pada
              tanggal 20 Mei 2019 telah memulai usaha di bidang konsultan
              konstruksi dan pertambangan. Meski belum genap berumur 1 (satu)
              tahun, namun diharapkan kemampuan CV. SKS jauh melebihi umurnya,
              karena pada hakekatnya CV. SKS memiliki sumber daya manusia yang
              unggul dan berpengalaman di bidangnya lebih dari 5 tahun. Sejak
              kami berdiri, hingga saat ini kami sudah berkerjasama dengan lebih
              dari 20 pelanggan di bidang konstruksi dan pertambangan. Hal ini
              menjadi bukti bahwa CV. SKS memiliki kompetensi yang tinggi dalam
              memberikan pelayanan terbaik bagi pelanggan kami. Dengan memiliki
              pengalaman yang cukup dan dibekali dengan sumber daya manusia yang
              berpengalaman di bidangnya, kami berharap CV. SKS dapat melakukan
              lompatan tinggi dalam menapaki bisnis konstruksi dan pertambangan
              ini sehingga bisa memberikan layanan yang terbaik bagi para
              pelanggan kami.
            </p>
          </div>
          {/* Visi */}
          <div className="container mx-auto text-center mt-8">
            <p className="text-2xl font-bold text-gray-800">Visi</p>
            <span className="text-lg text-gray-500 mt-4 font-light">
              Menjadi Mitra Utama di Bidang Konstruksi dan Pertambangan dalam
              bidang Perencanaan dan Pengawasan Mutu
            </span>
          </div>
          {/* Misi */}
          <div className="container mx-auto text-center mt-8">
            <p className="text-2xl font-bold text-gray-800">Misi</p>
            <ul className="text-left mt-4">
              <li className="list-disc ml-4">
                Menjadikan kegiatan kami sebagai ibadah dalam hidup kami.
              </li>
              <li className="list-disc ml-4">
                Memberikan kemampuan terbaik dalam melaksanakan setiap
                pekerjaan.
              </li>
              <li className="list-disc ml-4">
                Menjadikan mutu dan kualitas sebagai hal yang utama di setiap
                pekerjaan.
              </li>
              <li className="list-disc ml-4">
                Menyediakan layanan konsultan konstruksi dan pertambangan yang
                terjangkau bagi semua kalangan.
              </li>
              <li className="list-disc ml-4">
                Kami terbuka dan selalu memperluas jaringan kerjasama untuk
                memberikan solusi bagi pelanggan kami.
              </li>
              <li className="list-disc ml-4">
                Selalu bertumbuh dan berinovasi untuk mencapai kepuasan bagi
                pelanggan kami.
              </li>
            </ul>
          </div>
        </section>
        <section
          id="layanan"
          className="flex flex-col items-center justify-center min-h-screen"
        >
          <div className="container mx-auto text-center">
            <p className="text-2xl font-bold text-gray-800">Layanan Kami</p>
            <p className="text-lg text-gray-500 mt-4 font-light">
              CV. Sinergi Karya Solutif memberikan layanan konsultan konstruksi
              dan pertambangan yang terbaik bagi pelanggan kami. Berikut adalah
              beberapa layanan yang kami tawarkan:
              <ul className="text-left mt-4">
                <li className="list-disc ml-4">
                  Konsultan Konstruksi Bangunan
                </li>
                <li className="list-disc ml-4">Konsultan Pertambangan</li>
                <li className="list-disc ml-4">Konsultan Konstruksi Jalan</li>
                <li className="list-disc ml-4">
                  Konsultan Konstruksi Jembatan
                </li>
                <li className="list-disc ml-4">Konsultan Konstruksi Gedung</li>
                <li className="list-disc ml-4">
                  Konsultan Konstruksi Pelabuhan
                </li>
                <li className="list-disc ml-4">Konsultan Konstruksi Dam</li>
                <li className="list-disc ml-4">
                  Konsultan Konstruksi Bendungan
                </li>
                <li className="list-disc ml-4">Konsultan Konstruksi Embung</li>
              </ul>
            </p>
          </div>
        </section>
        <section
          id="kontak"
          className="flex flex-col items-center justify-center min-h-screen"
        >
          <div className="container mx-auto text-center">
            <p className="text-2xl font-bold text-gray-800">Kontak Kami</p>
            <p className="text-lg text-gray-500 mt-4 font-light">
              Jika Anda tertarik dengan layanan yang kami tawarkan, silakan
              hubungi kami melalui kontak berikut:
              <ul className="text-left mt-4">
                <li className="list-disc ml-4">Telepon: 08123456789</li>
                <li className="list-disc ml-4">
                  Email: kontak@sinergikaryasolutif.org
                </li>
              </ul>
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {year} Sinergi Karya Solutif. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
