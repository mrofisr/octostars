import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { TbBrandGithubFilled } from "react-icons/tb";

const Home = () => {
  useEffect(() => {
    document.title = "OctoStars - The Github Stars Finder";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Search for a Github user to see their starred repositories",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Search for a Github user to see their starred repositories";
      document.head.appendChild(meta);
    }
  }, []);
  return (
    <>
      <div className="container mx-auto flex items-center justify-center py-8 h-screen">
        <div className="flex flex-col items-center space-y-4">
          <TbBrandGithubFilled className="text-6xl text-black" />
          <h1 className="text-3xl font-bold text-black font-mono">
            Github <span className="text-amber-500">Stars</span>
          </h1>
          <p className="text-lg text-black font-sans font-light">
            Search for a Github user to see their starred repositories
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input id="username" type="text" placeholder="Username" />
          </div>
          <Button
            onClick={() => {
              const username = document.getElementById("username").value;
              window.location.href = `/stars/${username}`;
            }}
            className="w-full max-w-sm"
            type="submit"
          >
            Search
          </Button>
          <div className="flex items-center flex-row space-x-2">
            <a
              href="/trending/repositories"
              className="text-black font-sans font-light hover:text-amber-500"
            >
              Trending Repositories
            </a>
            <span className="text-black font-sans font-light">|</span>
            <a
              href="/trending/developers"
              className="text-black font-sans font-light hover:text-amber-500"
            >
              Trending Developers
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
