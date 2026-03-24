"use client";
import Button from "../shared/Button/Button";
import toast from "react-hot-toast";
import css from './BookingForm.module.css'

export default function BookingForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Booking confirmed!");
  };
  return (
    <form onSubmit={handleSubmit} className={css.formSection}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="text" name="bookingDate" />
      <textarea name="comment"></textarea>
      <Button type="submit">Send</Button>
    </form>
  );
}
