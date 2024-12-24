import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GitRepoStars from "@/lib/github";
import { useState, useEffect, useCallback } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Star, Search, Filter, ExternalLink } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const Stars = () => {
  const slug = useParams();
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(
    new URLSearchParams(useLocation().search).get("page") || 1
  );
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState({ next: null, last: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounce search function
  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      setSearch(searchTerm);
    }, 300),
    []
  );

  useEffect(() => {
    const fetchRepos = async () => {
      if (!slug.username) return;
      setLoading(true);
      setError(null);

      try {
        const { data, pagination } = await GitRepoStars(slug.username, page, search);
        setRepos(data);
        setPagination(pagination);
      } catch (error) {
        setError("Failed to fetch repos");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [slug.username, page, search]);

  const handleNextPage = () => {
    if (pagination.next && page < pagination.last) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const totalPages = pagination.last ? Number(pagination.last) : 1;
  const startPage = Math.max(page - 2, 1);
  const endPage = Math.min(startPage + 4, totalPages);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    debouncedSearch(searchTerm);
  };

  return (
    <>
      <div className="relative"> {/* Add relative container */}
        {/* Full screen background pattern with adjusted opacity */}
        <div className="fixed inset-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:24px_24px]" />
        </div>

        {/* Main content */}
        <div className="min-h-screen bg-transparent p-4"> {/* Changed bg-neo-white to bg-transparent */}
          <div className="container mx-auto py-8 relative">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="bg-neo-accent p-4 border-neo-black border-[3px] shadow-neo rounded-none">
                  <Star size={32} className="text-neo-black" />
                </div>
                <h1 className="text-4xl font-neo-heading font-bold">
                  <span className="text-neo-black">{slug.username}'s</span>
                  <span className="text-yellow-400"> Stars</span>
                </h1>
              </div>
            </div>

            {/* Search Section */}
            <div className="w-full max-w-2xl mx-auto mb-8">
              <div className="flex gap-2">
                <Input
                  id="search"
                  type="text"
                  onChange={handleSearchChange}
                  placeholder="Search Repositories"
                  className="w-full border-neo-black border-[3px] rounded-none shadow-neo focus:shadow-neo-lg transition-all"
                />
              </div>
            </div>

            {/* Repository Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading
                ? Array.from({ length: 30 }).map((_, i) => (
                  <Card key={i} className="border-neo-black border-[3px] rounded-none shadow-neo animate-pulse">
                    <CardHeader>
                      <div className="flex items-center space-x-2 animate-pulse w-full">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="w-24 h-4 bg-gray-200 rounded-full"></div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 animate-pulse w-full">
                        <div className="w-24 h-4 bg-gray-200 rounded-full"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))
                : repos.map((item) => (
                  // Modify the Card component to have a flex column layout with min-height
                  <Card
                    key={item.id}
                    className="border-neo-black border-[3px] rounded-none shadow-neo hover:shadow-neo-lg transform hover:-translate-y-[2px] transition-all overflow-hidden flex flex-col min-h-[300px]" // Added flex flex-col and min-height
                  >
                    <a
                      href={`https://github.com/${item.full_name}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block h-full flex flex-col" // Added flex flex-col to make link take full height
                    >
                      <CardHeader className="border-b-[3px] border-neo-black bg-neo-gray">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg font-neo-heading">
                            {item.name}
                          </CardTitle>
                          <ExternalLink size={20} className="text-neo-black" />
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4 flex-grow"> {/* Added flex-grow to push footer down */}
                        <CardDescription className="text-neo-black font-neo">
                          {item.description || "No description provided"}
                        </CardDescription>
                      </CardContent>
                      <CardContent className="flex flex-wrap gap-2">
                        {item.topics.slice(0, 4).map((topic) => (
                          <span
                            key={topic}
                            className="text-xs bg-neo-secondary px-3 py-1 border-neo-black border-[2px] rounded-none shadow-neo"
                          >
                            {topic}
                          </span>
                        ))}
                      </CardContent>
                      {/* <CardFooter className="bg-neo-gray border-t-[3px] border-neo-black mt-auto"> Added mt-auto to stick to bottom */}
                      {/* <div className="flex items-center gap-2"> */}
                      {/* <Star className="text-neo-accent" size={20} /> */}
                      {/* <span className="font-neo-heading"> */}
                      {/* {item.stargazers_count.toLocaleString()} */}
                      {/* </span> */}
                      {/* </div> */}
                      {/* </CardFooter> */}
                    </a>
                  </Card>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <Pagination>
                <PaginationContent className="gap-2">
                  <PaginationItem>
                    <PaginationPrevious
                      href={`?page=${page - 1}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePreviousPage();
                      }}
                      disabled={page === 1}
                      className="border-neo-black border-[3px] bg-neo-white rounded-none shadow-neo hover:shadow-neo-lg transform hover:-translate-y-[2px] transition-all"
                    />
                  </PaginationItem>
                  {Array.from(
                    { length: endPage - startPage + 1 },
                    (_, i) => startPage + i
                  ).map((pageNum) => (
                    <PaginationItem key={pageNum}>
                      <PaginationLink
                        href={`?page=${pageNum}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setPage(pageNum);
                        }}
                        className={cn(
                          "border-neo-black border-[3px] bg-neo-white rounded-none shadow-neo hover:shadow-neo-lg transform hover:-translate-y-[2px] transition-all",
                          pageNum === page && "bg-neo-accent"
                        )}
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  {endPage < totalPages && (
                    <PaginationItem>
                      <PaginationEllipsis className="border-neo-black bg-neo-white border-[3px] rounded-none shadow-neo" />
                    </PaginationItem>
                  )}
                  <PaginationItem>
                    <PaginationNext
                      href={`?page=${page + 1}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNextPage();
                      }}
                      disabled={page === totalPages}
                      className="border-neo-black border-[3px] bg-neo-white rounded-none shadow-neo hover:shadow-neo-lg transform hover:-translate-y-[2px] transition-all"
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Debounce utility function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default Stars;
