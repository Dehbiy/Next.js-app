import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  nameOrder: string;
}

const UserTable = async ({ nameOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users"); // This gets cashed automatically
  const users: User[] = await res.json();

  let sorted: User[] = sort(users).asc(
    nameOrder === "Email" ? (user) => user.email : (user) => user.name
  );

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>
              <Link href="/users?nameOrder=Name">Name</Link>
            </th>
            <th>
              <Link href="/users?nameOrder=Email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
