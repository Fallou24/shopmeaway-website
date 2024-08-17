import React from "react";
import ReshipmentCards from "./reshipmentCards";

export default function Hero() {
  return (
    <>
      <h1 className="font-bold md:text-6xl text-3xl  mb-8 lg:w-1/2 lg:mx-auto">
        Faites venir vos colis depuis n'importe où
      </h1>
      <p className="mb-16 lg:w-1/2 lg:mx-auto">
        Avec ShopMeAway, envoyez vos colis dans nos adresses en France, USA,
        Chine, Turquie, Maroc, Émirats Arabes Unis, un peu partout dans le monde
        pour les réceptionner au Sénégal ou en Côte d'Ivoire, au meilleur tarif.
      </p>
      <ReshipmentCards />
    </>
  );
}
