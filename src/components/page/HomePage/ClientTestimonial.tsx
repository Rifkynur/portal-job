"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import TestimonialCard from "@/components/module/TestimonialCard";

const ClientTestimonial = () => {
  return (
    <section className="bg-primary-200 py-10 lg:py-24">
      <div className="container">
        <h3 className="font-medium text-2xl md:text-3xl lg:text-[40px] text-center">Clients Testimonial</h3>
        <div className="mt-8 md:mt-7 lg:mt-12">
          <Splide
            options={{
              type: "loop",
              arrows: false,
              gap: "24px",
              perPage: 4,
              pagination: false,
              position: "center",
              breakpoints: {
                1024: {
                  perPage: 2,
                  gap: "16px",
                },
                640: {
                  perPage: 1,
                  gap: "2rem",
                },
              },
            }}
          >
            <TestimonialCard desc={`“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”`} icon="user1" name="Robert Johnson" job="Ui/UX Designer" />
            <TestimonialCard
              desc={`“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.”`}
              icon="user2"
              name="Thomas Mathew"
              job="Sales Manager"
            />
            <TestimonialCard
              desc={`“Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante”`}
              icon="user3"
              name="Harris Machmod"
              job="Software Developer"
            />
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;
