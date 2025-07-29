"use client";

import React from "react";
import Image from "next/image";

import { companies, testimonials } from "@/data/index";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

type Company = {
  id: number;
  img: string;
  nameImg: string;
  name: string;
};

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Meet Our
        <span className="text-purple"> Team</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company: Company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  src={company.img}
                  alt={company.name}
                  width={40}
                  height={40}
                  className="md:w-10 w-5"
                />
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={40}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;