import React from "react";

interface IHomeContainer {
  children?: React.ReactNode;
}

export default function HomeContainer({ children }: IHomeContainer) {
  return <div className="w-[95%] mx-auto ">{children}</div>;
}
