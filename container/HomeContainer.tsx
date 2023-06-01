import React from "react";

interface IHomeContainer {
  children?: React.ReactNode;
}

export default function HomeContainer({ children }: IHomeContainer) {
  return <section className="w-container mx-auto">{children}</section>;
}
