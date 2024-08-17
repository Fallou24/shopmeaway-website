import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@nextui-org/react";
import ReshipmentCards from "@/components/reshipmentCards";
import Stepper from "@/components/Stepper";
import Pricing from "@/components/Pricing";
import Faq from "@/components/faq";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={
        "min-h-screen text-center  p-4 pt-44 lg:px-6 container mx-auto  " + inter.className
      }
    >
      <h1 className="font-bold md:text-6xl text-4xl mb-6 lg:w-1/2 lg:mx-auto">
        Faites venir vos colis depuis n'importe où
      </h1>
      <p className="mb-16 lg:w-1/2 lg:mx-auto">
        Avec ShopMeAway, envoyez vos colis dans nos adresses en France, USA,
        Chine, Turquie, Maroc, Émirats Arabes Unis, un peu partout dans le monde
        pour les réceptionner au Sénégal ou en Côte d'Ivoire, au meilleur tarif.
      </p>
      <ReshipmentCards />
      <Button className="mt-8 mb-44 bg-primary-color text-white font-medium hover:bg-primary-color-500">Déclarer ou demander un achat</Button>
      <Stepper/>
      <Pricing/>
      <Faq/>
    </main>
  );
}
