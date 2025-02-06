'use client';

import { useUser } from '@/hooks/useUsers';
import { UserPosts } from '@/components/UserPosts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { useParams } from 'next/navigation';
import { UserProfile } from '@/components/UserProfile';
import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function UserDetailPage() {
    const params = useParams();
    const userId = parseInt(params.id as string); 
  const { user, isLoading } = useUser(userId);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <Skeleton className="h-48 w-full mb-4" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  if (!user) {
    return (
      <Card className="max-w-md mx-auto mt-10 p-6 text-center shadow-lg border border-border">
        <CardContent className="flex flex-col items-center space-y-4">
          <AlertTriangle className="w-10 h-10 text-destructive" />
          <h2 className="text-xl font-semibold text-foreground">
            User Not Found
          </h2>
          <p className="text-sm text-muted-foreground">
            We couldn&#39;t find the user you&#39;re looking for. Please check again or try another search.
          </p>
          
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="container max-w-5xl mx-auto p-4">
      <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
      <UserProfile user={user}/>
        </TabsContent>
        
        <TabsContent value="posts">
          <UserPosts userId={userId} />
        </TabsContent>
      </Tabs>
    </div>
  );
}