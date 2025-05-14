"use client";
import React from "react";

export default function index({ index, title, manageModal }) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="project"
    >
      <h2>{title}</h2>
      <p>this is our quality</p>
    </div>
  );
}
