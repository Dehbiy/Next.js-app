"use client";

import Button from "@/app/components/Button";
import React from "react";
import { useRouter } from "next/navigation";

const newUser = () => {
  const router = useRouter();

  return (
    <div>
      <Button buttonName="Create" onClick={() => router.push("/users")} />
    </div>
  );
};

export default newUser;
