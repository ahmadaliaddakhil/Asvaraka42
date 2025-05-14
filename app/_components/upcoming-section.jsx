"use client";

import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import Image from "next/image";
import Project from "./project";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    title: "Kelas 12-1",
    src: "/upcoming/kelas-12-1.jpg",
    color: "#3E4E50", // deep slate blue
  },
  {
    title: "Kelas 12-2",
    src: "/upcoming/kelas-12-2.jpg",
    color: "#7D5A5A", // muted mauve brown
  },
  {
    title: "Kelas 12-3",
    src: "/upcoming/kelas-12-3.jpg",
    color: "#C0A080", // soft almond beige
  },
  {
    title: "Kelas 12-4",
    src: "/upcoming/kelas-12-4.jpg",
    color: "#506D7A", // cold steel blue
  },
  {
    title: "Kelas 12-5",
    src: "/upcoming/kelas-12-5.jpg",
    color: "#A45D5D", // brick rose
  },
  {
    title: "Kelas 12-6",
    src: "/upcoming/kelas-12-6.jpg",
    color: "#5A7D6B", // muted sage green
  },
  {
    title: "Kelas 12-7",
    src: "/upcoming/kelas-12-7.jpg",
    color: "#BFAFB2", // warm lavender gray
  },
  {
    title: "Kelas 12-8",
    src: "/upcoming/kelas-12-8.jpg",
    color: "#7C93A3", // dusty sky blue
  },
  {
    title: "Kelas 12-9",
    src: "/upcoming/kelas-12-9.jpg",
    color: "#A67B5B", // caramel brown
  },
  {
    title: "Kelas 12-10",
    src: "/upcoming/kelas-12-10.jpg",
    color: "#4F4A45", // elegant ash black
  },
  {
    title: "Kelas 12-11",
    src: "/upcoming/kelas-12-11.jpg",
    color: "#6C7A89", // cloudy slate blue
  },
  {
    title: "Kelas 12-12",
    src: "/upcoming/kelas-12-12.jpg",
    color: "#D9CAB3", // cream sand
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function UpcomingSection() {
  const upcomingProductsRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".title-upcoming-products-word",
        { y: (el) => (el % 2 === 0 ? -100 : 100) },
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
    },
    { scope: upcomingProductsRef }
  );

  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;

  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const xMoveContainer = useRef(null);
  const yMoveContainer = useRef(null);
  const xMoveCursor = useRef(null);
  const yMoveCursor = useRef(null);
  const xMoveCursorLabel = useRef(null);
  const yMoveCursorLabel = useRef(null);

  useEffect(() => {
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };

  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      ref={upcomingProductsRef}
      onMouseMove={(e) => moveItems(e.clientX, e.clientY)}
      className="projects"
      id="class-list"
    >
      <div className="container-title upcoming">
        <div className="container">
          <h1 className="title-upcoming-products">
            <span className="title-upcoming-products-word">Class</span>
            <span className="title-upcoming-products-word">List</span>
          </h1>
        </div>
      </div>

      <div className="body">
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            manageModal={manageModal}
          />
        ))}
      </div>

      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="modalContainer"
        >
          <div style={{ top: index * -100 + "%" }} className="modalSlider">
            {projects.map((project, i) => (
              <div
                key={`modal_${i}`}
                className="modal"
                style={{ backgroundColor: project.color }}
              >
                <Image
                  src={project.src}
                  width={300}
                  height={0}
                  alt={project.title}
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={cursor}
          className="cursor"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        />

        <motion.div
          ref={cursorLabel}
          className="cursorLabel"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </main>
  );
}
