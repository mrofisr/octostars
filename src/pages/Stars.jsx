import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import GitRepoStars from "@/lib/github";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Stars = () => {
  const slug = useParams();
  const [repo, setRepo] = useState([]);
  console.log(slug.username);
  useEffect(() => {
    GitRepoStars(slug.username)
      .then((data) => setRepo(data))
      .catch((error) => console.log(error))
      .finally(() => console.log("done"));
  }, [slug]);
  return (
    <>
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {repo.length > 0 ? (
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4"></div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
          ) : (
            <>
              {Array.from({ length: 6 }).map((_, i) => (
                <div className="flex flex-col space-y-3 border-2 border-gray-200 p-8 rounded-xl w-[350px] h-[250px] items-center justify-center">
                  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Stars;
