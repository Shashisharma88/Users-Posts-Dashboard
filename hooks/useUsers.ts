import useSWR from 'swr';
import { fetchUsers, fetchUserPosts, fetchUser } from '@/services/api';
import { User, Post } from '@/lib/types';

export function useUsers() {
  const { 
    data: users, 
    error: usersError, 
    isLoading: isUsersLoading 
  } = useSWR<User[]>('users', fetchUsers, {
    revalidateOnFocus: false,
    dedupingInterval: 5 * 60 * 1000,
  });

  return { users, isUsersLoading, usersError };
}

export function useUser(userId: number) {
  const { 
    data: user, 
    error: userError, 
    isLoading 
  } = useSWR<User>(userId ? `user-${userId}` : null, 
     userId ? () => fetchUser(userId) : null, 
    {
      revalidateOnFocus: false,
      dedupingInterval: 5 * 60 * 1000,
    }
  );

  return { user, isLoading, userError };
}

export function useUserPosts(userId?: number) {
  const { 
    data: posts, 
    error: postsError, 
    isLoading: isPostsLoading 
  } = useSWR<Post[]>(
    userId ? `posts-${userId}` : null, 
     userId ?() => fetchUserPosts(userId) : null,
    {
      revalidateOnFocus: false,
      dedupingInterval: 5 * 60 * 1000,
    }
  );

  return { posts, isPostsLoading, postsError };
}