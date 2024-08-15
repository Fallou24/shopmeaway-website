import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function ReshipmentCards() {
  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6">
      <Card className="bg-[#18181B] text-white p-6 ">
        <CardHeader className="flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-10 w-10 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            ></path>
          </svg>

          <p className="text-[#6B7280] text-lg mt-2">Des tarifs compétitifs</p>
        </CardHeader>
        <CardBody>
          <p className="text-center">
            Nous vous offrons les meilleurs tarifs pour la réexpédition de vos
            colis.
          </p>
        </CardBody>
      </Card>
      <Card className="bg-[#18181B] text-white p-6 ">
        <CardHeader className="flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-10 w-10 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            ></path>
          </svg>
          <p className="text-[#6B7280] text-lg mt-2">
            Un service client réactif
          </p>
        </CardHeader>
        <CardBody>
          <p className="text-center">
            Nous sommes à votre disposition pour répondre à toutes vos
            questions.
          </p>
        </CardBody>
      </Card>
      <Card className="bg-[#18181B] text-white p-6 ">
        <CardHeader className="flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-10 w-10 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
          </svg>
          <p className="text-[#6B7280] text-lg mt-2">
            Des délais de livraison rapides
          </p>
        </CardHeader>
        <CardBody>
          <p className="text-center">
            Nous vous offrons les meilleurs tarifs pour la réexpédition de vos
            colis.
          </p>
        </CardBody>
      </Card>
      <Card className="bg-[#18181B] text-white p-6 ">
        <CardHeader className="flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-10 w-10 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            ></path>
          </svg>
          <p className="text-[#6B7280] text-lg mt-2">
            Une logistique optimisée et sécurisée
          </p>
        </CardHeader>
        <CardBody>
          <p className="text-center">
            Nous mettons tout en œuvre pour que vos colis soient livrés en toute
            sécurité.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
