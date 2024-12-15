"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "/app/_components/ui/3d-card.js";
import Link from "next/link";

const cardsData = [
  {
    title: "Wide Variety of Gadgets",
    description: "Explore a wide range of innovative gadgets for every need.",
    image: "/wide.webp",
    link: "https://www.bestbuy.com/",
    buttonText: "Explore More",
  },
  {
    title: "Affordable Pricing",
    description: "Shop high-quality products at prices that won't break the bank.",
    image: "/afford.webp",
    link: "https://www.amazon.com/",
    buttonText: "Check Deals",
  },
  {
    title: "Quick Delivery",
    description: "Get your purchases delivered to your doorstep in no time.",
    image: "/quick.jpeg",
    link: "https://www.fedex.com/en-us/home.html",
    buttonText: "Track Now",
  },
];


export default function ThreeDCardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cardsData.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href={card.link}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                {card.buttonText}
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
