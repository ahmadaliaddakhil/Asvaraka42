"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Picture1 from "../../public/popular/section-2.jpg";
import Picture2 from "../../public/popular/section-1.jpg";
import Picture3 from "../../public/popular/section-3.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { popularProducts } from "../../config/constant";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const PopularProductsSection = () => {
  const popularProductsRef = useRef(null);
  const containerRef = useRef(null);
  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);

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

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const createSlideAnimation = (element, direction) => {
      const distance = 300 * direction;
      gsap.fromTo(
        element,
        { x: distance },
        {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    };

    createSlideAnimation(slide1Ref.current, -1);
    createSlideAnimation(slide2Ref.current, 1);
    createSlideAnimation(slide3Ref.current, -1);
  }, []);

  return (
    <section
      className="products-section"
      id="yearbook"
      ref={popularProductsRef}
      style={{
        overflowX: "hidden", // Mencegah scroll horizontal
      }}
    >
      <div className="container-title">
        <div className="container">
          <h1 className="title-products">
            <span className="title-products-word">Asvaraka</span>
            <span className="title-products-word">42's</span>
            <span className="title-products-word">yerabook</span>
            <span className="title-products-word year">in</span>
            <span className="title-products-word year">2025</span>
          </h1>
        </div>
      </div>

      <div style={{ height: "15vh" }} />
      <div ref={containerRef}>
        <Slide refProp={slide1Ref} src={Picture1} />
        <Slide refProp={slide2Ref} src={Picture2} />
        <Slide refProp={slide3Ref} src={Picture3} />
      </div>
      <div style={{ height: "10rem" }} />
    </section>
  );
};

const Slide = ({ refProp, src }) => {
  return (
    <div
      ref={refProp}
      style={{
        position: "relative",
        display: "flex",
        whiteSpace: "nowrap",
        margin: "2rem 0",
        transform: "translateX(-25%)", // Ganti dari left: "-25%"
        width: "150vw", // Lebar besar untuk animasi tanpa overflow
        willChange: "transform",
      }}
    >
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div
      style={{
        padding: "0 1rem",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "7.5vw", margin: 0 }}>COMING SOON</p>
      <span
        style={{
          position: "relative",
          height: "7.5vw",
          aspectRatio: "2 / 1",
          borderRadius: "9999px",
          overflow: "hidden",
          display: "block",
        }}
      >
        <Image src={src} alt="image" fill style={{ objectFit: "cover" }} />
      </span>
    </div>
  );
};

export default PopularProductsSection;
