import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@nextui-org/react";
import ReshipmentCards from "@/components/reshipmentCards";
import Stepper from "@/components/Stepper";
import Pricing from "@/components/Pricing";
import Faq from "@/components/faq";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={
        "min-h-screen text-center  p-4 pt-44 lg:px-6 container mx-auto  " +
        inter.className
      }
    >
      <Hero />
      <Button className="mt-8 mb-44 bg-primary-color text-white font-medium hover:bg-primary-color-500">
        Déclarer ou demander un achat
      </Button>
      <Stepper />
      <Pricing />
      <Faq />
    </main>
  );
}
