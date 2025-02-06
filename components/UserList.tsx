"use client";

import { useState } from "react";
import { User } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserCard } from "./UserCard";

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredUsers = users
    .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 ">
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Input
          type="text"
          placeholder="Search users using name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-2/3 border-gray-300"
        />
        <Select onValueChange={(value) => setSortOrder(value as "asc" | "desc")} defaultValue="asc">
          <SelectTrigger className="w-full sm:w-1/3 border-gray-300">
            <SelectValue placeholder="Sort by Name" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">A → Z</SelectItem>
            <SelectItem value="desc">Z → A</SelectItem>
          </SelectContent>
        </Select>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">No users found</p>
        )}
      </div>
    </div>
  );
}
