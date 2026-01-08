"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button, Input } from "@/Components/ui";

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
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const USER_ID = process.env.NEXT_PUBLIC_USER_ID;

    setBtnText("Sending...");
    setBtnDisabled(true);

    try {
      // Validate Environment Variables
      if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
        const missing = [];
        if (!SERVICE_ID) missing.push("NEXT_PUBLIC_SERVICE_ID");
        if (!TEMPLATE_ID) missing.push("NEXT_PUBLIC_TEMPLATE_ID");
        if (!USER_ID) missing.push("NEXT_PUBLIC_USER_ID");
        throw new Error(`Missing EmailJS environment variables: ${missing.join(", ")}`);
      }

      // Save to MongoDB
      const apiResponse = await fetch("/api/responses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!apiResponse.ok) {
        throw new Error("Failed to save to database");
      }

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
      console.error("Form submission error:", error);
      const errorMessage = (error as Error).message;
      if (errorMessage.includes("public key")) {
        setBtnText("Key Error");
      } else if (errorMessage.includes("Missing EmailJS")) {
        setBtnText("Config Error");
      } else {
        setBtnText("Failed");
      }
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
