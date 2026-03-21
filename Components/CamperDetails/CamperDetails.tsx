"use client";
import { Infos } from "@/types/camper";
import { useState } from "react";
import Features from "./Features/Features";
import Reviews from "./Reviews/Reviews";
import BookingForm from "../BookingForm/BookingForm";

interface Props {
  camper: Infos;
}

export default function CamperDetails({ camper }: Props) {
  const [activateTab, setActivateTab] = useState("features");
  return (
    <div>
      <button onClick={() => setActivateTab("features")}>Features</button>
      <button onClick={() => setActivateTab("reviews")}>Reviews</button>

      {activateTab === "features" && <Features camper={camper} />}
      {activateTab === "reviews" && <Reviews camper={camper} />}
      <BookingForm />
    </div>
  );
}
