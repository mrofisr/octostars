const menu = [
  {
    name: "Beranda",
    url: "/",
  },
  {
    name: "Tentang",
    url: "/tentang",
  },
  {
    name: "Layanan",
    url: "/layanan",
  },
  {
    name: "Kontak",
    url: "/kontak",
  },
];

function App() {
  return (
    <>
      <nav class="fixed top-0 w-full bg-white shadow-md z-10">
        <div class="container mx-auto flex items-center justify-between py-4">
          <a href="/" class="text-xl font-bold text-gray-800">
            <span class="text-blue-500">Sinergi</span> Karya Solutif
          </a>
          <ul class="flex space gap-4">
            {menu.map((item) => (
              <li>
                <a href={item.url} class="text-gray-700 hover:text-gray-900">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main>
        <section class="flex flex-col items-center justify-center h-screen">
          <div className="container mx-auto text-center">
            <p className="text-4xl font-bold text-gray-800">
              Sinergi Karya Solutif
            </p>
            <p className="text-lg text-gray-500 mt-4">
              Kami adalah tim yang berdedikasi tinggi dalam memberikan solusi
              terbaik untuk Anda
            </p>
          </div>
        </section>
      </main>
      <footer class="absolute bottom-0 w-full text-center font-sans font-light text-sm pb-4 text-gray-500">
        <div class="container mx-auto">
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://jawa.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              class="underline hover:text-gray-700 font-bold"
            >
              Jawara Cloud
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
