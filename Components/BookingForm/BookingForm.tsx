"use client";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Button from "../shared/Button/Button";
import toast from "react-hot-toast";
import css from "./BookingForm.module.css";
import { useState } from "react";

export default function BookingForm() {
  const [date, setDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    if (!name || !email || !date) return;
    toast.success("Booking confirmed!");
  };
  return (
    <div className={css.formTab}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.formSubtitle}>Stay connected! We are always ready to help you.</p>
      <form onSubmit={handleSubmit} className={css.formSection}>
        <input type="text" name="name" placeholder="Name*" required />
        <input type="email" name="email" placeholder="Email*" required />
        <DatePicker
          selected={date}
          onChange={(date: Date | null) => setDate(date)}
          placeholderText="Booking date*"
          popperPlacement="bottom-start"
          required
        />
        <textarea placeholder="Comment" name="comment"></textarea>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
