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
      <div className="container mx-auto flex items-center justify-center py-8">
        <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {repo.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <IoStarSharp className="text-yellow-400" size={20} />
                <CardDescription>{item.stargazers_count}</CardDescription>
              </CardFooter>
            </Card>
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
