"use client";
import Button from "../shared/Button/Button";
import toast from "react-hot-toast";
import css from "./BookingForm.module.css";

export default function BookingForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Booking confirmed!");
  };
  return (
    <div>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <form onSubmit={handleSubmit} className={css.formSection}>
        <input type="text" name="name" placeholder="Name*" />
        <input type="email" name="email" placeholder="Email*" />
        <input type="date" name="bookingDate" placeholder="" />
        <textarea placeholder="Comment" name="comment"></textarea>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
