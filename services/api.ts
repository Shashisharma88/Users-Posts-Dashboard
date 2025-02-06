import { User, Post } from '@/lib/types'

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
}

export async function fetchUser(userId: number): Promise<User> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users/${userId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user ${userId}`);
  }
  return response.json();
}

export async function fetchUserPosts(userId: number): Promise<Post[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/posts?userId=${userId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch posts for user ${userId}`);
  }
  return response.json();
}

export async function fetchPost(postId: number): Promise<Post> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/${postId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch post ${postId}`);
  }
  return response.json();
}