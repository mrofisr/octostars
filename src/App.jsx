import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

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
      <NavigationMenu>
        <NavigationMenuList className="container">
          <NavigationMenuItem>
            <a href="/">
              <img src="/logo.png" alt="Sinergi Karya Solutif" class="h-20" />
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <main>
        <section class="flex flex-col items-center justify-center min-h-screen">
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
    </>
  );
}

export default App;
