import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { nameOrder: string };
}

const UsersPage = async ({ searchParams: { nameOrder } }: Props) => {
  return (
    <>
      <h1>Users:</h1>
      <Link href="/users/new">New user</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable nameOrder={nameOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
