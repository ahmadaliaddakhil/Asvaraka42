"use client";

import React from "react";
import Image from "next/image";

const DesktopAlert = () => {
  return (
    <div className="desktop-only-alert">
      <div className="alert-content">
        <div className="asvaraka-logo">
          <Image
            src={"/logo1.png"}
            alt="Logo Asvaraka42"
            className="logo"
            width={60}
            height={60}
          />
        </div>
        <h2>Desktop View Only</h2>
        <p>This website is optimized for desktop viewing.</p>
        <p>
          Please access this site on a desktop or laptop computer for the best
          experience.
        </p>
      </div>
    </div>
  );
};

export default DesktopAlert;
