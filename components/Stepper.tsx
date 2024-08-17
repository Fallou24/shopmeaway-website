import { Button } from "@nextui-org/react";
import React from "react";

export default function Stepper() {
  return (
    <section className="mb-44">
      <h2 className="text-left font-medium text-2xl text-secondary-color mb-4">
        Des solutions de réexpédition rationalisées
      </h2>
      <p className="text-left opacity-60 mb-8 md:w-1/2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
        temporibus optio praesentium quae saep.
      </p>

      <div className="flex justify-between gap-2 flex-col md:flex-row text-center">
        <div>
          <p className="bg-secondary-color w-14 h-14 mb-3 mx-auto rounded-full  flex justify-center items-center text-xl font-medium">1</p>
          <p className="max-w-[15rem] mx-auto text-sm opacity-60">Touvez un produit sur internet</p>
        </div>
        <div className="md:h-[1px] bg-white w-[1px] mx-auto h-16 md:grow md:mt-7"></div>
        <div>
          <p className="bg-secondary-color w-14 h-14 mx-auto mb-3 rounded-full  flex justify-center items-center text-xl font-medium">2</p>
          <p className="max-w-[15rem] text-sm opacity-60 mx-auto">
            Envoyez votre article à l'un de nos entrepôts aux États-Unis, en
            Chine, en France ou à Dubaï
          </p>
        </div>
        <div className="md:h-[1px] bg-white w-[1px] mx-auto h-16 md:grow md:mt-7"></div>
        <div>
          <p className="bg-secondary-color w-14 h-14 mb-3  mx-auto rounded-full  flex justify-center items-center text-xl font-medium">3</p>
          <p className="max-w-[15rem] text-sm opacity-60 mx-auto">Détendez-vous et laissez-nous vous le livrer</p>
        </div>
      </div>
      <Button className="mt-12 mb-8 bg-secondary-color text-white font-medium">
        En savoir plus sur la réexpédition
      </Button>
    </section>
  );
}
