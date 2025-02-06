import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle2, Mail, Phone, Building2,Globe,MapPin,Map,Hash } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User } from '@/lib/types';

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  
  return (
    <Card className="hover:bg-accent transition-colors h-full flex flex-col shadow-lg border border-gray-200 rounded-xl overflow-hidden p-5 bg-white dark:bg-gray-800">
        <CardHeader className="flex flex-col sm:flex-row items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-t-lg">
          <Avatar className="w-16 h-16 border border-gray-300">
            <AvatarFallback>
              <UserCircle2 className="w-16 h-16 text-gray-400" />
            </AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">{user?.name}</CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400">@{user?.username}</p>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4 space-y-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-center space-x-2">
            <Hash className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span>User ID: {user?.id}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span>{user?.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span>{user?.website}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Building2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <div>
              <span className="font-semibold">{user?.company?.name}</span>
              <p className="text-xs text-gray-500 dark:text-gray-400">{user?.company?.catchPhrase}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{user?.company?.bs}</p>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Address</h3>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <p>{`${user?.address?.street}, ${user?.address?.suite}, ${user?.address?.city}, ${user?.address?.zipcode}`}</p>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Map className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <p>Geo: {user?.address?.geo?.lat}, {user?.address?.geo?.lng}</p>
            </div>
          </div>
        </CardContent>
      </Card>
  );
}