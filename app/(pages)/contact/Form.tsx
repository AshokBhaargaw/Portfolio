"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button, Input } from "@/Components/";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [btnText, setBtnText] = useState("Submit");
  const [btnDisabled, setBtnDisabled] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const USER_ID = process.env.NEXT_PUBLIC_USER_ID!;

    setBtnText("Sending...");
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
      reset();
    } catch (error) {
      console.log("EmailJS error:", error);
      setBtnText("Failed");
    } finally {
      setTimeout(() => {
        setBtnText("Submit");
        setBtnDisabled(false);
      }, 2000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 sm:space-y-6"
    >
      {/* Name */}
      <Input
        label="Name"
        placeholder="Please enter your name"
        autoComplete="name"
        {...register("name", { required: "Name is required" })}
        error={errors.name?.message}
      />

      {/* Email */}
      <Input
        type="email"
        label="Email"
        placeholder="Your email address"
        inputMode="email"
        autoComplete="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email",
          },
        })}
        error={errors.email?.message}
      />

      {/* Message */}
      <Input
        type="textarea"
        label="Message"
        placeholder="Enter your message here..."
        rows={4}
        {...register("message", { required: "Message is required" })}
        error={errors.message?.message}
      />

      {/* Submit */}
      <div className="text-center pt-2">
        <Button
          type="submit"
          variant="secondary"
          className="w-full sm:w-auto min-w-[140px]"
          disabled={btnDisabled}
        >
          {btnText}
        </Button>
      </div>
    </form>
  );
}
