import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

export default function Pricing() {
  return (
    <section className="mb-44">
      <h1 className="font-bold md:text-6xl text-4xl mb-6 lg:w-1/2 lg:mx-auto">
        Plans & Tarifs
      </h1>
      <p className="mb-12 lg:w-1/2 lg:mx-auto">
        Choisissez le plan qui correspond le mieux à vos besoins.
      </p>
      <div className="flex flex-col md:flex-row max-w-4xl mx-auto gap-8">
        <Card className="bg-[#18181B] text-white ">
          <CardHeader className="flex-col">
            <h2 className="font-bold text-3xl mb-2">Standard</h2>
            <p className="opacity-60 text-sm  text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
              dipisicing elit. Deserun. Deserunt
            </p>
          </CardHeader>
          <CardBody className="flex-col items-center">
            <h2 className="font-bold text-3xl mb-2"></h2>
            <p className="flex items-center gap-2 md:gap-4 mb-6">
              <span className="font-bold text-3xl shrink-0">0 CFA </span>
              <span className="opacity-60">/ month • Shipping at 14$ / Kg</span>
            </p>
            <Button className="bg-primary-color text-white">Choisir</Button>
          </CardBody>
        </Card>

        <Card className="bg-[#18181B] text-white ">
          <CardHeader className="flex-col">
            <h2 className="font-bold text-3xl mb-2">Premium</h2>
            <p className="opacity-60 text-sm  text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
              dipisicing elit. Deserun. Deserunt
            </p>
          </CardHeader>
          <CardBody className="flex-col items-center">
            <h2 className="font-bold text-3xl mb-2"></h2>
            <p className="flex gap-2 md:gap-4 mb-6 items-center">
              <span className="font-bold text-3xl shrink-0">15 000 CFA </span>
              <span className="opacity-60">/ month • Shipping at 8$ / Kg</span>
            </p>
            <Button className="bg-primary-color text-white">Choisir</Button>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
