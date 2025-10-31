import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button, Input } from "../../Components";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Button state
  const [btnText, setBtnText] = useState("Submit");
  const [btnDisabled, setBtnDisabled] = useState(false);

  const onSubmit = async (data) => {
    // ---- replace with your EmailJS IDs ----
    const SERVICE_ID = "service_liunxse";
    const TEMPLATE_ID = "template_t8yfr49";
    const USER_ID = "5M7cByAwinvWjd03U";
 
    setBtnText("Sending…");
    setBtnDisabled(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        USER_ID
      );

      setBtnText("Sent!");
      reset(); // clear the form
      setTimeout(() => {
        setBtnText("Submit");
        setBtnDisabled(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      setBtnText("Failed");
      setTimeout(() => {
        setBtnText("Submit");
        setBtnDisabled(false);
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* ---------- Name ---------- */}
      <Input
        label="Name"
        placeholder="Please Enter your name"
        {...register("name", { required: "Name is required" })}
        error={errors.name?.message}
      />

      {/* ---------- Email ---------- */}
      <Input
        type="email"
        label="Email"
        placeholder="Your email address"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email",
          },
        })}
        error={errors.email?.message}
      />

      {/* ---------- Message (textarea) ---------- */}
      <Input
        type="textarea"
        label="Message"
        placeholder="Enter your message here..."
        rows={5}
        {...register("message", { required: "Message is required" })}
        error={errors.message?.message}
      />

      {/* ---------- Submit Button ---------- */}
      <div className="text-center">
        <Button
          type="submit"
          variant="secondary"
          className="mt-2 min-w-[120px]"
          disabled={btnDisabled}
        >
          {btnText}
        </Button>
      </div>
    </form>
  );
}