import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Github, TrendingUp, Users, ArrowRight, Stars } from "lucide-react";

const Home = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    document.title = "OctoStars - The Github Stars Finder";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Search for a Github user to see their starred repositories"
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Search for a Github user to see their starred repositories";
      document.head.appendChild(meta);
    }
  }, []);

  const handleSearch = () => {
    if (username.trim()) {
      window.location.href = `/stars/${username}`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-neo-white p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="container mx-auto flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-neo-white border-neo-black border-[3px] p-8 rounded-none shadow-neo-xl transform transition-transform hover:-translate-y-1 space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-neo-primary p-4 border-neo-black border-[3px] shadow-neo inline-block rounded-none">
                <Github size={48} className="text-neo-black" />
              </div>
            </div>
            <h1 className="text-4xl font-neo-heading font-bold tracking-tight">
              Octo<span className="text-neo-primary">Stars</span>
            </h1>
            <p className="font-neo text-lg text-neo-black">
              Your GitHub Stars Explorer
            </p>
          </div>

          {/* Search Section */}
          <div className="space-y-4">
            <div className="relative">
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter GitHub username"
                className="w-full px-4 py-3 border-neo-black border-[3px] rounded-none shadow-neo focus:outline-none focus:ring-0 focus:shadow-neo-lg transition-shadow font-neo text-lg"
              />
            </div>
            <Button
              onClick={handleSearch}
              className="w-full bg-neo-accent hover:bg-neo-accent/90 text-neo-black border-neo-black border-[3px] rounded-none shadow-neo hover:shadow-neo-lg transform hover:-translate-y-[2px] transition-all font-neo-heading py-6 text-lg flex items-center justify-center gap-2"
            >
              Search Stars <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="/trending/repositories"
              className="flex items-center gap-2 px-4 py-2 bg-neo-secondary hover:bg-neo-secondary/90 text-neo-black border-neo-black border-[3px] rounded-none shadow-neo hover:shadow-neo-lg transform hover:-translate-y-[2px] transition-all font-neo"
            >
              <TrendingUp size={20} />
              Trending Repos
            </a>
            <a
              href="/trending/developers"
              className="flex items-center gap-2 px-4 py-2 bg-neo-secondary hover:bg-neo-secondary/90 text-neo-black border-neo-black border-[3px] rounded-none shadow-neo hover:shadow-neo-lg transform hover:-translate-y-[2px] transition-all font-neo"
            >
              <Users size={20} />
              Trending Devs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;