"use client";

import * as React from "react";

import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

export function CustomDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Mostrar</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Perfil</DropdownMenuItem>
        <DropdownMenuItem>Cobrança</DropdownMenuItem>
        <DropdownMenuItem>Equipe</DropdownMenuItem>
        <DropdownMenuItem>Inscrições</DropdownMenuItem>
        <DropdownMenuItem>Configuraçõs</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
