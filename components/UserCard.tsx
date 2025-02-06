import Link from 'next/link';
import { User } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { UserCircle2 } from 'lucide-react';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Link href={`/users/${user.id}`} className="block h-full">
      <Card className="hover:bg-accent  hover:scale-[1.02] transition-transform duration-200  h-full flex flex-col shadow-lg border border-gray-200 rounded-xl overflow-hidden">
        <CardHeader className="flex items-center space-x-4 p-4 bg-gray-100">
          <Avatar className="w-12 h-12 border border-gray-300">
            <AvatarFallback>
              <UserCircle2 className="w-12 h-12 text-gray-400" />
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">{user.name}</CardTitle>
            <p className="text-sm text-gray-500">ID: {user.id}</p>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4 space-y-3 text-sm text-gray-700">
          <p className="text-gray-600"><span className="font-semibold">Email:</span> {user.email}</p>
          <p className="text-gray-600">
            <span className="font-semibold">Address:</span> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </p>
          <p className="text-gray-600"><span className="font-semibold">Company:</span> {user.company.name}</p>
        </CardContent>
      </Card>
    </Link>
  );
}