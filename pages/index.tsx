import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={"min-h-screen " + inter.className}>
      <Button>Hello</Button>
    </main>
  );
}
