import { useUserPosts } from '@/hooks/useUsers';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';
import { FileText } from "lucide-react";

interface UserPostsProps {
  userId: number;
}

export function UserPosts({ userId }: UserPostsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, isPostsLoading } = useUserPosts(userId);
  
  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);
  
  const pageNumbers = posts 
    ? Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => i + 1)
    : [];

  if (isPostsLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <Skeleton key={index} className="h-28 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  if (!posts?.length) {
    return (
      <Card className="max-w-md mx-auto mt-10 p-6 text-center shadow-lg border border-border">
        <CardContent className="flex flex-col items-center space-y-4">
          <FileText className="w-10 h-10 text-muted-foreground" />
          <h2 className="text-xl font-semibold text-foreground">
            No Posts Available
          </h2>
          <p className="text-sm text-muted-foreground">
            There are no posts to display. Please check back later.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts?.map((post) => (
          
            <Card key={post.id}  className="hover:bg-accent transition-colors h-full flex flex-col shadow-lg border border-gray-200 rounded-xl overflow-hidden p-5 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold line-clamp-1 text-gray-900 dark:text-gray-100">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-gray-700 dark:text-gray-300">
                <p className="text-sm text-muted-foreground ">{post.body}</p>
              </CardContent>
            </Card>

        ))}
      </div>
      
      {pageNumbers.length > 1 && (
        <Pagination className="flex justify-center" onClick={()=>window.scrollTo(0,0)}>
          <PaginationContent className="flex gap-2">
            {pageNumbers.map((number) => (
              <PaginationItem key={number}>
                <PaginationLink
                  onClick={() => setCurrentPage(number)}
                  isActive={number === currentPage}
                  className="px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
