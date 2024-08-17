import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Faq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const itemClasses = {
    title: "text-white",
    content: "text-left",
  };
  return (
    <section className="max-w-4xl mx-auto mb-10">
      <h1 className="font-bold md:text-6xl text-4xl mb-12  lg:mx-auto">
        Questions récurrentes
      </h1>
      <Accordion variant="splitted" itemClasses={itemClasses}>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Question 1"
          className="bg-[#18181B]"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Question 2"
          className="bg-[#18181B]"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Question 3"
          className="bg-[#18181B]"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </section>
  );
}
