"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { popularProducts } from "../../config/constant";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const PopularProductsSection = () => {
  const popularProductsRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".title-products-word",
        {
          y: (el) => (el % 2 === 0 ? 100 : -100),
        },
        {
          ease: "power3.out",
          stagger: 0.8,
          duration: 3.5,
          y: 0,
          scrollTrigger: {
            trigger: ".container-title",
            start: "top bottom-=200",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      popularProducts.forEach((_, idx) => {
        gsap.fromTo(
          `.popular-product-${idx + 1}-word`,
          {
            opacity: 0.3,
          },
          {
            ease: "power1.inOut",
            stagger: 1,
            duration: 7,
            opacity: 1,
            scrollTrigger: {
              trigger: `.col-product-${idx + 1}`,
              start: "top bottom-=200",
              end: "center center",
              scrub: true,
            },
          }
        );
      });
    },
    {
      scope: popularProductsRef,
    }
  );

  return (
    <section
      className="products-section"
      id="products"
      ref={popularProductsRef}
    >
      <div className="container-title">
        <div className="container">
          <h1 className="title-products">
            <span className="title-products-word">our</span>
            <span className="title-products-word">first</span>
            <span className="title-products-word">trailer</span>
            <span className="title-products-word year">movie</span>
            <span className="title-products-word year">2025</span>
          </h1>
        </div>
      </div>
      <div className="youtube-video-container">
        <iframe
          src="https://www.youtube.com/embed/0TzaRq_AZo4?si=OQgu9-ALZCpEoYK-"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default PopularProductsSection;
