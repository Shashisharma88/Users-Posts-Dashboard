'use client';

import { useUsers } from '@/hooks/useUsers';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import UserList from '@/components/UserList';
import { User } from '@/lib/types';

export default function UsersPage() {
  const { users, isUsersLoading, usersError } = useUsers();

  if (usersError) {
    return (
      <Alert variant="destructive" className="max-w-md mx-auto mt-10 p-6 text-center shadow-lg ">
      <div className="flex flex-col items-center space-y-4">
        <AlertTriangle className="w-10 h-10 text-destructive" />
        <div>
          <AlertTitle className="text-lg font-semibold">Error Loading Users</AlertTitle>
          <AlertDescription className="text-sm text-muted-foreground">
            Failed to load users. Please try again later.
          </AlertDescription>
        </div>
        <Button variant="outline" onClick={()=>window.location.reload()}>
         Refresh
        </Button>
      </div>
    </Alert>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 flex justify-center">Users Dashboard</h1>
      <div className="">
        {isUsersLoading 
          ?(
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto p-6 lg:px-1 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} className="h-56 w-full rounded-lg" />
              ))}
            </div>
          ):
            (<UserList users={users as User[]}/>)
        }
      </div>
    </div>
  );
}