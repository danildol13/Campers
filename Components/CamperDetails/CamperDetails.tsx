"use client";
import { Infos } from "@/types/camper";
import { useState, useRef, useEffect } from "react";
import Features from "./Features/Features";
import Reviews from "./Reviews/Reviews";
import css from "./CamperDetails.module.css";

interface Props {
  camper: Infos;
}

export default function CamperDetails({ camper }: Props) {
  const [activateTab, setActivateTab] = useState("features");
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
  const featuresRef = useRef<HTMLButtonElement>(null);
  const reviewsRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const activeRef = activateTab === "features" ? featuresRef : reviewsRef;
    if (activeRef.current) {
      setLineStyle({
        left: activeRef.current.offsetLeft,
        width: activeRef.current.offsetWidth,
      });
    }
  }, [activateTab]);

  return (
    <div>
      <div className={css.switchButtons}>
        <button
          ref={featuresRef}
          className={css.featureButton}
          onClick={() => setActivateTab("features")}
        >
          Features
        </button>
        <button
          ref={reviewsRef}
          className={css.reviewButton}
          onClick={() => setActivateTab("reviews")}
        >
          Reviews
        </button>
        <span
          className={css.activeLine}
          style={{ left: lineStyle.left, width: lineStyle.width }}
        />
      </div>

      {activateTab === "features" && <Features camper={camper} />}
      {activateTab === "reviews" && <Reviews camper={camper} />}
    </div>
  );
}
