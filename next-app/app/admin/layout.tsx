import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const adminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-300 mr-5 p-5">Side bar</aside>
      <div>{children}</div>
    </div>
  );
};

export default adminLayout;
