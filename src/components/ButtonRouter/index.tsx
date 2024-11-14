"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "../ui/button";

interface ButtonRouterProps extends ButtonProps {
  route: string;
  name: string;
}

export default function ButtonRouter({
  route,
  name,
  ...rest // Captura todas as outras props
}: ButtonRouterProps) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(route)}
      {...rest} // Passa as outras props para o Button
    >
      {name}
    </Button>
  );
}
