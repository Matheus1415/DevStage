import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { Input } from "@/components/input";
import {ArrowRight, Copy} from "lucide-react";

export default function Home() {
  return (
    <main>
      <div>Hello world!</div>
      <Button >
        Enviar
        <ArrowRight/>
      </Button>
      <IconButton>
        <Copy/>
      </IconButton>
      <Input placeholder="Digite seu e-mail" type="email"/>
      <Input placeholder="Digite seu e-mail" type="email" error/>
    </main>
  );
}
