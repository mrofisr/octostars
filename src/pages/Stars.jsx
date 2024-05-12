import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GitRepoStars from "@/lib/github";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
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

const Stars = () => {
  const slug = useParams();
  const search = useLocation().search;
  const page = new URLSearchParams(search).get("page") || 1;
  const [repo, setRepo] = useState([]);
  useEffect(() => {
    GitRepoStars(slug.username, page)
      .then((data) => setRepo(data))
      .catch((error) => console.log(error))
      .finally(() => console.log("done"));
  }, [slug.username, page]);
  return (
    <>
      <div className="container mx-auto items-center justify-center py-8">
        <h1 className="text-3xl font-bold text-black font-mono text-center">
          {slug.username} <span className="text-amber-500">Stars</span>
        </h1>
        <div className="grid grid-cols-3 py-4 space-x-2">
          <Input
            id="search"
            type="text"
            placeholder="Search Repo"
            onChange={() => {}}
          />
        </div>
        <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {/* Skeleton */}
          {repo.length === 0
            ? Array.from({ length: 9 }).map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div className="w-24 h-4 bg-gray-200 rounded-full"></div>
                    </div>
                  </CardHeader>
                </Card>
              ))
            : repo.map((item) => (
                <>
                  <Card key={item.id}>
                    <a href={item.html_url} target="_blank" rel="noreferrer">
                      <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{item.description}</CardDescription>
                      </CardContent>
                      <CardContent className="flex flex-wrap space-x-2 flex-col sm:flex-row">
                        {item.topics.slice(0, 4).map((topic) => (
                          <span
                            key={topic}
                            className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </CardContent>
                      <CardFooter>
                        <IoStarSharp className="text-yellow-400" size={20} />
                        <CardDescription>
                          {item.stargazers_count}
                        </CardDescription>
                      </CardFooter>
                    </a>
                  </Card>
                </>
              ))}
        </div>
      </div>
      <div className="flex justify-center w-full pb-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <div className="items-center md:flex hidden">
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </div>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default Stars;
